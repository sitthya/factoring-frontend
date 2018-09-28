import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';
import { Client } from "../shared/client.model";

@Component({
  selector: 'app-client',
  templateUrl: './client-grid.component.html',
  styleUrls: ['./client-grid.component.scss']
})
export class ClientGridComponent {
  clients: Client[];
  scrollBarHorizontal = (window.innerWidth < 960);
  columnModeSettingSmall = (window.innerWidth < 560) ? 'standard':'force';

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(
      clients => {
        this.clients = clients;
      });
  }




  /*basic_table_data;

  constructor() {
    this.fetch((data) => {
      this.basic_table_data = data;
    });
  }
​
  ngOnInit() {
  }
​
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/table.json`);
    ​console.log('hello');
​console.log(JSON.parse(req.response));
    req.onload = () => {
      cb(JSON.parse(req.response));
    }
​
    req.send();
  }*/
}

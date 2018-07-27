import { Component } from '@angular/core';
import { ClientService } from './shared/client.service';
import {Client} from "./shared/client.model";

@Component({
  selector: 'app-client',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  clients: Client[];

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
}

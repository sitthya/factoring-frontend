import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Client} from "./client.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' })
};

@Injectable()
export class ClientService {
  private clientServerUrl = 'http://localhost:8080/client';

  constructor(private http: HttpClient) { }

  // Get clients from the server
  public getClients() {
    return this.http.get<Client[]>(this.clientServerUrl, httpOptions);
  }
}

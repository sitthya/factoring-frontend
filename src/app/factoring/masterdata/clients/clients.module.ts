// Angular Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Router
import { ClientRoutes } from './clients.routing';

// Sample Demo pages
import { ClientsComponent } from './clients.component';

// Use API
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './shared/client.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientRoutes),
    HttpClientModule
  ],
  declarations: [ClientsComponent],
  providers: [ClientService]
})
export class ClientsModule { }

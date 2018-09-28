// Angular Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Router
import { ClientRoutes } from './client.routing';

// Sample Demo pages
import { ClientGridComponent } from './client-grid/client-grid.component';

// Tables
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Use API
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './shared/client.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientRoutes),
    HttpClientModule,
    NgxDatatableModule
  ],
  declarations: [ClientGridComponent],
  providers: [ClientService]
})
export class ClientModule { }

import { Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';

export const ClientRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'client',
      component: ClientsComponent
    }]
  }
]

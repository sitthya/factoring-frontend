import { Routes } from '@angular/router';
import { ClientGridComponent } from './client-grid/client-grid.component';

export const ClientRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'client',
      component: ClientGridComponent
    }]
  }
]

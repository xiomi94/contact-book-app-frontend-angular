import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts-page/contacts-page.component').then(m => m.ContactsPageComponent)
  }
];

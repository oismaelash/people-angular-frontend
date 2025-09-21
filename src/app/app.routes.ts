import { Routes } from '@angular/router';
import { PeopleTableComponent } from './components/people-table/people-table';

export const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: PeopleTableComponent },
  { path: '**', redirectTo: '/people' }
];

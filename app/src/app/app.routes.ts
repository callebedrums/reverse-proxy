import { Routes } from '@angular/router';
import { EntryPointComponent } from './entry-point/entry-point.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'entry-point/:entry', component: EntryPointComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];

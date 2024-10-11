import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [{ 
  path: '', 
  redirectTo: '/home', 
  pathMatch: 'full' 
},
{
  path: "home",
  pathMatch: 'full',
  component: HomeComponent,
}, {
  path: "works",
  component: WorksComponent,
}, {
  path: "team",
  component: TeamComponent
}, {
  path: "contact",
  component: ContactComponent
}];

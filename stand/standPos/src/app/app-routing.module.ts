import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SplashComponent } from './splash/splash.component';
import { AgendaComponent } from './nav/agenda/agenda.component';
import { ClientsComponent } from './nav/clients/clients.component';
import { DashComponent } from './nav/dash/dash.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  {


    path: 'hub', component: NavComponent, children: [

      {
        path: '', component: AgendaComponent
      },
      /*{
        path: 'agenda', component: AgendaComponent
      }*/

      {
        path: 'clientss', component: ClientsComponent
      },
      




    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }

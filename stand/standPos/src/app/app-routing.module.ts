import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SplashComponent } from './splash/splash.component';
import { AgendaComponent } from './nav/agenda/agenda.component';
import { ClientsComponent } from './nav/clients/clients.component';
import { DashComponent } from './nav/dash/dash.component';
import { ChecklistsComponent } from './nav/checklists/checklists.component';
import { InventoryComponent } from './nav/inventory/inventory.component';
import { RepairsComponent } from './nav/repairs/repairs.component';
import { BillingComponent } from './nav/billing/billing.component';
import { DayEndComponent } from './nav/day-end/day-end.component';
import { InternacomsComponent } from './nav/internacoms/internacoms.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  {


    path: 'hub', component: NavComponent, children: [

      {
        path: '', component: DashComponent
      },
      {
        path: 'agenda', component: InternacomsComponent
      },

      {
        path: 'clientss', component: ClientsComponent
      },
      {
        path: 'inventor', component: InventoryComponent
      },
      {
        path: 'procedList', component: ChecklistsComponent
      },
      {
        path: 'repairs', component: RepairsComponent
      },
      {
        path: 'invoicing', component: BillingComponent
      },
      {
        path: 'dashh', component: DashComponent
      },
      {
        path: 'internCom', component: InternacomsComponent
      },
      {
        path: 'dayEnd', component: DayEndComponent
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

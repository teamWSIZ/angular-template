import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {SwarmComponent} from '../swarm/swarm.component';

/**
 * Generation by:
 * ng generate module app-routing --module=app
 */


const myroutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'swarm', component: SwarmComponent},
  {path: '', redirectTo: '/swarm', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

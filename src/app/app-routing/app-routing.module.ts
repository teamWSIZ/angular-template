import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {SecondComponent} from '../second/second.component';

/**
 * Generation by:
 * ng generate module app-routing --module=app
 */


const myroutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'second', component: SecondComponent},
  {path: '', redirectTo: '/second', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

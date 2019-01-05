import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TempFeelComponent} from '../tempfeel/temp-feel.component';

/**
 * Generation by:
 * ng generate module app-routing --module=app
 */

const myroutes: Routes = [
  {path: 'feel', component: TempFeelComponent},
  {path: '', redirectTo: '/feel', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

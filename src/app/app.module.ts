import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopbarComponent} from './topbar/topbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NowyComponent } from './nowy/nowy.component';
import { SwarmComponent } from './swarm/swarm.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
    NowyComponent,
    SwarmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

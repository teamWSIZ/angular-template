import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopbarComponent} from './topbar/topbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DatatableComponent} from './datatable/datatable.component';
import {EdituserComponent} from './edituser/edituser.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NowyComponent } from './nowy/nowy.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SecondComponent } from './second/second.component';
import { MessagebrowserComponent } from './messagebrowser/messagebrowser.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { RoombrowserComponent } from './roombrowse/roombrowser.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
    DatatableComponent,
    EdituserComponent,
    LoginComponent,
    NowyComponent,
    SecondComponent,
    MessagebrowserComponent,
    AdminpanelComponent,
    RoombrowserComponent
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

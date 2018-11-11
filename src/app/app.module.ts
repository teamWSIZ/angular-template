import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopbarComponent} from './topbar/topbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NowyComponent } from './nowy/nowy.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SecondComponent } from './second/second.component';
import { MessagebrowserComponent } from './messagebrowser/messagebrowser.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { RoombrowserComponent } from './roombrowser/roombrowser.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
    LoginComponent,
    NowyComponent,
    SecondComponent,
    MessagebrowserComponent,
    AdminpanelComponent,
    RoombrowserComponent,
    UserLoginComponent
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

import { QueueModule } from './modules/queue/queue.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from './../environments/environment';
import { AlertService } from './services/alert.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './modules/main/main.module';
import { LoginModule } from './modules/login/login.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MainService } from './services/main.service';
import { HelperModule } from './pipes/helpers.module';
import { UserService } from './services/user.service';
import { Test1Module } from './modules/test1/test1.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule,
    MainModule,
    LoginModule,
    BrowserAnimationsModule,
    QueueModule,
    Test1Module
  ],
  providers: [
    MainService,
    AlertService,
    UserService,
    HelperModule,
    { provide: 'API_URL', useValue: environment.apiUrl },
    { provide: 'APPNAME', useValue: environment.appName },
    { provide: 'VERSION', useValue: environment.version },
    { provide: 'SUBVERSION', useValue: environment.subVersion },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

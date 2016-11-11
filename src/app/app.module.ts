import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';
import { ComponentsModule } from '../core/components/components.module';
import { ShellModule } from '../shell/shell.module';
import { PagesModule } from '../pages/pages.module';

import { App } from './app.component';

const config = {
  apiKey: "AIzaSyDY_s4Lx7hJHhRMbDUuiwTiGiw-BbEH644",
  authDomain: "prjtoto.firebaseapp.com",
  databaseURL: "https://prjtoto.firebaseio.com",
  storageBucket: "prjtoto.appspot.com",
  messagingSenderId: "130899308329"
};
  

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ComponentsModule,
    ShellModule,
    PagesModule
  ],
  declarations: [
    App
  ],
  providers: [
    appRoutingProviders
  ],  
  bootstrap: [ App ]
})
export class AppModule {

  constructor() {
    firebase.initializeApp(config);
  }

 }

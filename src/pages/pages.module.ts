import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ComponentsModule } from '../core/components/components.module';

import { Wall } from './wall/wall.component';
import { Settings } from './settings/settings.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [
    Wall,
    Settings
  ],
  exports: [
    Wall,
    Settings
  ]
})
export class PagesModule { }

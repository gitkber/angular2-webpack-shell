import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { IconButton } from './icon-button/icon-button.component';
import { TextButton } from './text-button/text-button.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    IconButton,
    TextButton
  ],
  exports: [
    IconButton,
    TextButton
  ]
})
export class ComponentsModule { }

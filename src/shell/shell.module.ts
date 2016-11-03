import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ComponentsModule } from '../core/components/components.module';
import { Shell } from './shell.component';
import { TopBar } from './top-bar/top-bar.component';
import { RightBar } from './right-bar/right-bar.component';
import { LeftBar } from './left-bar/left-bar.component';
import { Footer } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [
    Shell,
    TopBar,
    RightBar,
    LeftBar,
    Footer
  ],
  exports: [
    Shell
  ]
})
export class ShellModule { }

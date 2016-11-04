import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { routing, appRoutingProviders } from './pages.routing';
import { ComponentsModule } from '../core/components/components.module';

import { Dashboard } from './dashboard/dashboard.component';
import { Settings } from './settings/settings.component';

@NgModule({
  imports: [
    routing,
    FormsModule,
    ComponentsModule
  ],
  declarations: [
    Dashboard,
    Settings
  ],
  exports: [
    Dashboard,
    Settings
  ]
})
export class PagesModule { }

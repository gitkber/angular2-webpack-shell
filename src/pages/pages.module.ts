import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { routing, appRoutingProviders } from './pages.routing';
import { ComponentsModule } from '../core/components/components.module';

import { Dashboard } from './dashboard/dashboard.component';
import { Settings } from './settings/settings.component';
import { Users } from './users/users.component';

@NgModule({
  imports: [
    routing,
    FormsModule,
    ComponentsModule
  ],
  declarations: [
    Dashboard,
    Settings,
    Users
  ],
  exports: [
    Dashboard,
    Settings,
    Users
  ]
})
export class PagesModule { }

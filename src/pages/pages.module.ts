import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { routing, appRoutingProviders } from './pages.routing';
import { ComponentsModule } from '../core/components/components.module';

import { Dashboard } from './dashboard/dashboard.component';
import { Settings } from './settings/settings.component';
import { Users } from './users/users.component';
import { User } from './user/user.component';

@NgModule({
  imports: [
    routing,
    FormsModule,
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    Dashboard,
    Settings,
    Users,
    User
  ],
  exports: [
    Dashboard,
    Settings,
    Users,
    User
  ]
})
export class PagesModule { }

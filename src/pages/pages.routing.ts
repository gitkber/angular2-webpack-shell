import { Routes, RouterModule } from '@angular/router';

import { Dashboard } from '../pages/dashboard/dashboard.component';
import { Settings } from '../pages/settings/settings.component';
import { Users } from '../pages/users/users.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'settings', component: Settings },
  { path: 'users', component: Users }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forChild(appRoutes);
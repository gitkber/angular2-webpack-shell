import { Routes, RouterModule } from '@angular/router';

import { Wall } from '../pages/wall/wall.component';
import { Settings } from '../pages/settings/settings.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/wall', pathMatch: 'full' },
  { path: 'wall', component: Wall },
  { path: 'settings', component: Settings }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
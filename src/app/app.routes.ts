import { ModuleWithProviders }  from '@angular/core';
import {provideRouter, RouterConfig} from '@angular/router';


import { SearchComponent }      from './search/search.component';
import { AboutComponent }      from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

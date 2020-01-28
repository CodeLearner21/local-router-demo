import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterModule, LocalizeRouterSettings, LocalizeParser } from 'localize-router';
import { LocalizeRouterHttpLoader } from 'localize-router-http-loader';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AboutComponent } from './about/about.component';

export function HttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  return new LocalizeRouterHttpLoader(translate, location, settings, http);
}

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    })
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserActionComponent } from './usersAction/userAction/userAction.component';
import { UsersActionComponent } from './usersAction/usersAction.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'userAction', component: UsersActionComponent, children: [
    { path: ':id', component: UserActionComponent }
  ] },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersActionComponent } from './usersAction/usersAction.component';
import { UserActionComponent } from './usersAction/userAction/userAction.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TransformedWordService} from './transformed-word.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersActionComponent,
    UserActionComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TransformedWordService],
  bootstrap: [AppComponent]
})
export class AppModule { }

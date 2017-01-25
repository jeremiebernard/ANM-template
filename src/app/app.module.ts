import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AlertModule } from 'ng2-bootstrap/alert';
import { ModalModule } from 'ng2-bootstrap/modal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './header/login/login.component';
import { SignupComponent } from './header/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

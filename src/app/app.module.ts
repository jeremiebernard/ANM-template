import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AlertModule } from 'ng2-bootstrap/alert';
import { ModalModule } from 'ng2-bootstrap/modal';

import { PostsService } from './services/api/posts.service';
import { RegisterService } from './services/api/register.service';
import { AuthentificationService } from './services/authentification.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    SearchComponent,
    PostDetailComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [PostsService, RegisterService, AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

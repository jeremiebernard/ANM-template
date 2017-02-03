import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/posts/1', pathMatch: 'full' },
    { path: 'posts', redirectTo: '/posts/1', pathMatch: 'full' },
    { path: 'posts/:page', component: PostsComponent },
    { path: 'post/:id', component: PostDetailComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:query', component: SearchComponent },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);

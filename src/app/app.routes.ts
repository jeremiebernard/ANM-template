import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/hot/1', pathMatch: 'full' },
    { path: 'hot', redirectTo: '/hot/1' },
    { path: 'trending', redirectTo: '/trending/1' },
    { path: 'fresh', redirectTo: '/fresh/1' },
    { path: 'hot/:page', component: PostsComponent, data: { postsType: 'hot' } },
    { path: 'trending/:page', component: PostsComponent, data: { postsType: 'trending' } },
    { path: 'fresh/:page', component: PostsComponent, data: { postsType: 'fresh' } },
    { path: 'post/:id', component: PostDetailComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:query', component: SearchComponent },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);

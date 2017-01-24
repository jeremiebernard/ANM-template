import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    { path: '', redirectTo: '/hot', pathMatch: 'full' },
    { path: 'hot', component: PostsComponent, data: { postsType: 'hot' } },
    { path: 'trending', component: PostsComponent, data: { postsType: 'trending' } },
    { path: 'fresh', component: PostsComponent, data: { postsType: 'fresh' } },
    { path: 'search', component: SearchComponent },
    { path: 'search/:query', component: SearchComponent },
    { path: 'signup', component: SignupComponent }
];

export const routing = RouterModule.forRoot(routes);
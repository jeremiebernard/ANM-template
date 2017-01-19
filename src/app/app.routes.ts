import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
    { path: '', redirectTo: '/hot', pathMatch: 'full' },
    { path: 'hot', component: PostsComponent, data: { postsType: 'hot' } },
    { path: 'trending', component: PostsComponent, data: { postsType: 'trending' } },
    { path: 'fresh', component: PostsComponent, data: { postsType: 'fresh' } }
];

export const routing = RouterModule.forRoot(routes);
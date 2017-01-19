import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
    { path: '', redirectTo: '/hot', pathMatch: 'full' },
    { path: 'hot', component: PostsComponent, data: { postsType: 'hot' } }
];

export const routing = RouterModule.forRoot(routes);
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/alert';

import { PostsService } from '../services/api/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  page: number;
  posts: any;
  error: string;

  constructor(private router: Router, private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = params['page'] ? params['page'] : 1;
    });

    if (isNaN(this.page)) {
      this.router.navigate(['/posts', 1]);
    }

    this.postsService.fetchPosts().subscribe(
      posts => this.posts = posts,
      error => this.error = error
    );
  }

  reload() {
    location.reload();
  }

}

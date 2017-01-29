import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../api/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts;
  page: number;
  postsType;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.postsType = (data as any).postsType);
    
    this.route.params.subscribe(params => {
      this.page = params['page'] ? params['page'] : 1;
    });

    this.postsService.fetchPosts().subscribe(
      posts => this.posts = posts,
      error => console.log('Error fetching posts')
    );
  }

}

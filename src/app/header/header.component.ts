import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  query: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate([`search/${this.query ? this.query : ''}`]);
    this.query = '';
  }

}

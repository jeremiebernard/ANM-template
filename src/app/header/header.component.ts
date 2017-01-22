import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

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
    if(this.query != undefined){
      this.router.navigate([`search/${this.query}`]);
    } else {
      this.router.navigate(['search']);
    }
    this.query = "";
  }

}

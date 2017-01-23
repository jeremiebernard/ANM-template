import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  exportAs: 'child'
})
export class LoginComponent implements OnInit {
  @ViewChild('loginModal') loginModal;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.loginModal.show();
  }

  login() {

  }

}

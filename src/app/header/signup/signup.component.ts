import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  exportAs: 'child'
})
export class SignupComponent implements OnInit {
  @ViewChild('signupModal') signupModal;

  constructor() { }

  ngOnInit() {
  }

  signup() {
    this.signupModal.hide();
  }

  show() {
    this.signupModal.show();
  }

}

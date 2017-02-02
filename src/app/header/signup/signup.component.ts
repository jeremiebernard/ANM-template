import { Component, OnInit, ViewChild } from '@angular/core';

import { RegisterService } from '../../services/api/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  exportAs: 'child'
})
export class SignupComponent implements OnInit {
  @ViewChild('signupModal') signupModal;
  user: Object = {};

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  signup() {
    this.registerService.register(this.user).subscribe(
      user => console.log(user),
      error => console.log(error)
    );
    this.signupModal.hide();
  }

  show() {
    this.signupModal.show();
  }

}

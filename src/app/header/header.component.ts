import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';

import { RegisterService } from '../services/api/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('loginModal') public loginModal: ModalDirective;
  @ViewChild('registerModal') public registerModal: ModalDirective;
  searchQuery: string;
  newUser: Object = {};
  registerSuccess: string;
  registerError: string;
  registerLoading: boolean = false;

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate([`search/${this.searchQuery ? this.searchQuery : ''}`]);
    this.searchQuery = '';
  }

  login() {
    this.loginModal.hide();
  }

  register() {
    this.registerLoading = true;
    this.registerService.register(this.newUser).subscribe(
      success => {
        this.registerSuccess = success;
        this.registerModal.hide();
        this.loginModal.show();
      },
      error => this.registerError = error,
      () => this.registerLoading = false
    );
  }

  showLoginModal() {
    this.loginModal.show();
  }

  showRegisterModal() {
    this.registerModal.show();
  }

}

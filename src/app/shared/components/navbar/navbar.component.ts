import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  preserveWhitespaces: false,
})
export class NavbarComponent implements OnInit {
  $isAuth: Observable<boolean>;

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.$isAuth = this.authService.isAuth;
  }

  getCurrentUser(): string {
    return this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

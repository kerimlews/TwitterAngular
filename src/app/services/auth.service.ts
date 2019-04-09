import {Injectable} from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  isAuth = new Subject<boolean>();

  setAuth(value: boolean): void {
    this.isAuth.next(value);
  }

  login(username: string, password: string) {
    const authToken = this.generateAuthToken(username, password);
    this.setAuthToken(authToken);
    this.storeUsername(username);
    this.isAuth.next(true);
  }

  getAuthToken(): string {
    const authToken = localStorage.getItem("token");
    return authToken ? authToken : "";
  }

  setAuthToken(authToken: string) {
    localStorage.setItem("token", authToken);
  }

  private clearAuthToken() {
    localStorage.removeItem("token");
  }

  private clearCredentials() {
    localStorage.removeItem("username");
  }

  generateAuthToken(username: string, password: string): string {
    return btoa(username + ":" + password);
  }

  getCurrentUser(): string {
    const username = localStorage.getItem("username");
    return username ? username : null;
  }

  private storeUsername(username: string) {
    localStorage.setItem("username", username);
  }

  logout() {
    this.clearAuthToken();
    this.clearCredentials();
    this.isAuth.next(false);
  }
}

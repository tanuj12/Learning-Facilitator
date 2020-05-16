import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) { }

  createUser(email: string, password: string, uName: string) {
    const authData = { email, password, uName};
    return this.http
    .post<{message: string, result: boolean }>('https://us-central1-learning-5ba3a.cloudfunctions.net/app/signup', authData );
  }

  loginUser(email: string, password: string) {
    const authData: AuthData = { email, password};
    return this.http
    .post<{message: string, acitve: boolean}>('https://learning-facilitator.herokuapp.com/login', authData );
  }

  getUser() {
    return this.authStatusListener.asObservable();
  }
  checkUser() {
    this.http.get<{value: boolean, message: string}>('https://learning-facilitator.herokuapp.com/checkUser')
    .subscribe((response) => {
      if (response.value !== true) {
        this.authStatusListener.next(false);
      } else {
        this.authStatusListener.next(true);
      }
    });
  }
  logout() {
    this.http.get<{value: boolean, message: string}>('https://learning-facilitator.herokuapp.com/logout')
    .subscribe((response) => {
        this.authStatusListener.next(false);
        this.router.navigate(['/']);
    });
  }
}

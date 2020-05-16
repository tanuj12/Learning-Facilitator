import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  public toolBar = null;
  title = 'frontend';
  public isLoggedIn = false;
  private authenticated = false;
  private authListenerSub: Subscription;
  private s: Subscription;
  constructor(private renderer: Renderer2, private authService: AuthService, public router: Router) {
  }

  ngOnInit() {
    this.toolBar = null;
    this.authService.checkUser();
    this.authListenerSub = this.authService.getUser()
    .subscribe((isAuthenticated) => {
      this.authenticated = isAuthenticated;
      if (!this.authenticated) {
        if (this.router.url === '/homePage' || this.router.url === '/notes' || this.router.url === '/questionAnswers') {
          this.router.navigate(['/', 'login']);
        }
        this.isLoggedIn = false;
        this.toolBar = true;
      } else {
        if (this.router.url === '/mainPage' || this.router.url === '/login' || this.router.url === '/register') {
          this.router.navigate(['/', 'homePage']);
        }
        this.isLoggedIn = true;
        this.toolBar = true;
      }
    });
  }

  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
  }
  Logout() {
    this.authService.logout();
    this.router.navigate(['/', 'mainPage']);
    this.isLoggedIn = true;
  }

}

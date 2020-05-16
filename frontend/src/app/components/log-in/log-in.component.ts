import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from '../../services.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit, OnDestroy {
  // public isLoading = true;
  private authenticated = false;
  private authListenerSub: Subscription;
  private uName = '';
  private password = '';
  form: FormGroup;
  errorLoggingUser = false;
  constructor(private app: AppComponent, private renderer: Renderer2, private authService: AuthService, private router: Router) {
    this.loadscript();
  }

  ngOnInit() {
    // this.authService.checkUser();
    // this.authListenerSub = this.authService.getUser()
    // .subscribe((isAuthenticated) => {
    //   this.authenticated = isAuthenticated;
    //   if (!this.authenticated) {
    //     this.isLoading = false;
    //   } else {
    //     this.isLoading = true;
    //     this.router.navigate(['/', 'homePage']);
    //   }
    // });
    this.form = new FormGroup({
      uName: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]})
    });
  }

  ngOnDestroy() {
    // this.authListenerSub.unsubscribe();
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.authService.loginUser(this.form.value.uName, this.form.value.password)
    .subscribe((response) => {
      if (response.message === 'User Logged in.') {
        this.app.isLoggedIn = true;
        this.router.navigate(['/', 'homePage']);
      } else {
        this.errorLoggingUser = true;
        this.form.reset();
      }
    });
  }
  loadscript() {
    const body = document.body;
    let script = document.createElement('script');
    script = document.createElement('script');
    script.src = 'assets/js/custom.js';
    script.type = 'text/javascript';
    this.renderer.appendChild(document.body, script);
  }
}

import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup;
  public isLoading = true;
  private authenticated = false;
  private authListenerSub: Subscription;
  userCreateError = false;

  constructor(private renderer: Renderer2, private authService: AuthService, public router: Router) {
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
      email: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      cpassword: new FormControl(null, {validators: [Validators.required]}),
    });
  }
  ngOnDestroy() {
    // this.authListenerSub.unsubscribe();
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.authService.createUser(this.form.value.email, this.form.value.password, this.form.value.uName)
    .subscribe(response => {
      if (response.result) {
        this.router.navigate(['/']);
      } else {
        console.log(response.message);
        console.log(response.result);
      }
    } , error => {
      this.userCreateError = true;
      this.form.reset();
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

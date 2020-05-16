import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit, OnDestroy {
  public isLoading = true;
  private authenticated = false;
  private authListenerSub: Subscription;
  form: FormGroup;
  private email;
  errorMailSending = false;
  constructor(private renderer: Renderer2, private authService: AuthService, private service: ServicesService, private router: Router) { }

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
      email: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]})
    });
  }
  ngOnDestroy() {
    // this.authListenerSub.unsubscribe();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.service.sendPasswordResetMail(this.form.value.email)
    .subscribe((response) => {
      if (response.sent) {
        this.router.navigate(['/']);
      } else {
        this.errorMailSending = true;
        this.form.reset();
      }
    }, error => {
      this.errorMailSending = true;
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

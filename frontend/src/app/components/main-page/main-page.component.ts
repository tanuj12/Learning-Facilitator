import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public isLoading = true;
  private authenticated = false;
  private authListenerSub: Subscription;
  private uName = '';
  private password = '';
  errorLoggingUser = false;
  loadAPI: Promise<any>;
  constructor(private renderer: Renderer2, private authService: AuthService, private router: Router) {
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
  }

  ngOnDestroy() {
    // this.authListenerSub.unsubscribe();
  }
  loadscript() {
    const body = document.body;
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/js/jquery-3.2.1.min.js';
    this.renderer.appendChild(document.body, script);
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/plugins/greensock/TweenMax.min.js';
    this.renderer.appendChild(document.body, script);
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/plugins/greensock/TimelineMax.min.js';
    this.renderer.appendChild(document.body, script);
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/plugins/scrollmagic/ScrollMagic.min.js';
    this.renderer.appendChild(document.body, script);
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/plugins/greensock/animation.gsap.min.js';
    this.renderer.appendChild(document.body, script);
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/plugins/greensock/ScrollToPlugin.min.js';
    this.renderer.appendChild(document.body, script);
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js';
    this.renderer.appendChild(document.body, script);
    script = document.createElement('script');
    script.src = 'assets/plugins/scrollTo/jquery.scrollTo.min.js';
    script.type = 'text/javascript';
    this.renderer.appendChild(document.body, script);
    script = document.createElement('script');
    script.src = 'assets/plugins/easing/easing.js';
    script.type = 'text/javascript';
    this.renderer.appendChild(document.body, script);
    script = document.createElement('script');
    script.src = 'assets/js/custom.js';
    script.type = 'text/javascript';
    this.renderer.appendChild(document.body, script);
  }

}

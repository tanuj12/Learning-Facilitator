import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  private authenticated = false;
  private authListenerSub: Subscription;
  constructor(private renderer: Renderer2, private authService: AuthService, private router: Router) {
    this.loadscript();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // this.authListenerSub.unsubscribe();
  }
  loadscript() {
    const body = document.body;
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js';
    this.renderer.appendChild(document.body, script);
    script = document.createElement('script');
    script.src = 'assets/js/custom.js';
    script.type = 'text/javascript';
    this.renderer.appendChild(document.body, script);
    script = document.createElement('script');
    script.src = 'assets/js/afterLogin.js';
    script.type = 'text/javascript';
    this.renderer.appendChild(document.body, script);
  }
}

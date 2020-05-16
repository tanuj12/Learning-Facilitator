import { Component, OnInit, OnDestroy, SecurityContext, Renderer2 } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { mimeType } from './mime-type.validator';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, OnDestroy {
  public isLoading = true;
  private authenticated = false;
  private authListenerSub: Subscription;
  private DownloadReadyListenerSub: Subscription;
  private DownloadFile: Subscription;
  public downloadisReady = false;
  public waitingForDownload = false;
  public submitBut = false;
  form: FormGroup;
  data: string;
  fileCount = 5;
  noFile = ['file0'];
  count = 0;
  f = [1];
  ff: File[] = [];
  private a: Subscription;
  constructor(
    private renderer: Renderer2,
    private authService: AuthService,
    private service: ServicesService,
    private router: Router,
    private fb: FormBuilder
    ) {
      this.loadscript();
    }
  imagePreview: string;
  ngOnInit() {
    // this.authService.checkUser();
    // this.authListenerSub = this.authService.getUser()
    // .subscribe((isAuthenticated) => {
    //   this.authenticated = isAuthenticated;
    //   if (!this.authenticated) {
    //     this.router.navigate(['/']);
    //   } else {
    //     this.isLoading = false;
    //   }
    // });
    this.form = new FormGroup({});
  }

  ngOnDestroy() {
    // this.authListenerSub.unsubscribe();
    if (this.DownloadReadyListenerSub) {
      this.DownloadReadyListenerSub.unsubscribe();
    }
    if (this.DownloadFile) {
      this.DownloadFile.unsubscribe();
    }
    if (this.a) {
      this.a.unsubscribe();
    }
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.addControl('' + this.noFile[this.count], this.fb.control(null, {validators: [Validators.required],
      asyncValidators: [mimeType]
     }));
    this.form.controls['' + this.noFile[this.count]].setValue(file);
    this.form.get(this.noFile[this.count]).updateValueAndValidity();
    console.log(this.form.get(this.noFile[this.count]));
    console.log(this.form.value[this.noFile[this.count]]);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result.toString();
    };
    this.count++;
    this.noFile.push('file' + this.count);
    this.submitBut = true;
    reader.readAsDataURL(file);
  }

  onSubmit() {
    // console.log('here');
    if (this.form.invalid) {
      // console.log(this.form);
      return;
    }
    // console.log('here');
    this.downloadisReady = false;
    this.waitingForDownload = true;
    for (let l of this.noFile) {
      if (this.form.value[l]) {
        // console.log(this.form.value[l]);
        this.ff.push(this.form.value[l]);
      }
    }
    console.log(this.ff);
    this.service.upload(this.ff);
    this.a = interval(3000).subscribe((x) => {
      this.checkDownload();
      });
    this.submitBut = false;
    // this.router.navigate(['/', 'homePage']);
  }
  checkDownload() {
    this.service.getDownloadReadystatus();
    this.DownloadReadyListenerSub = this.service.checkDownload()
    .subscribe((ready) => {
        this.downloadisReady = ready;
        if (ready === true) {
          this.waitingForDownload = false;
          this.a.unsubscribe();
        }
    });
  }
  Download() {
    this.DownloadFile = this.service.downloadFile()
    .subscribe((data) => {
      if (data.active === true) {
        this.DownloadReadyListenerSub.unsubscribe();
        window.open(data.message);
        this.DownloadFile.unsubscribe();
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

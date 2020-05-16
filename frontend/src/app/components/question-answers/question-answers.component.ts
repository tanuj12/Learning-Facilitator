import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ServicesService } from 'src/app/services.service';
import { mimeType } from '../notes/mime-type.validator';
import { Qna } from 'src/app/post.model';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.css']
})
export class QuestionAnswersComponent implements OnInit, OnDestroy {
  public isLoading = true;
  private authenticated = false;
  private authListenerSub: Subscription;
  private Answer: Subscription;
  qNa: Qna[] = [];
  public Upload = false;
  public submitBut = true;
  form: FormGroup;
  form2: FormGroup;
  data: string;
  question: string;
  private a: Subscription;
  private uploadStatus: Subscription;
  private AnswerReadyListenerSub: Subscription;

  constructor(
    private renderer: Renderer2,
    private authService: AuthService,
    private service: ServicesService,
    private router: Router,
    private sanitizer: DomSanitizer
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
    this.form = new FormGroup({
      file: new FormControl(null, {validators: [Validators.required],
         asyncValidators: [mimeType]
        })
    });
    this.form2 = new FormGroup({
      question: new FormControl(null, {validators: [Validators.required]})
    });
  }

  ngOnDestroy() {
    // this.authListenerSub.unsubscribe();
    if (this.uploadStatus) {
      this.uploadStatus.unsubscribe();
    }
    if (this.a) {
      this.a.unsubscribe();
    }
    if (this.Answer) {
      this.Answer.unsubscribe();
    }
  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({file});
    console.log(this.form.get('file').valid);
    this.form.get('file').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result.toString();
    };
    // console.log(this.imagePreview);
    reader.readAsDataURL(file);
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.uploadStatus  = this.service.uploadStatusDoc(this.form.value.file)
    .subscribe((value) => {
      console.log(value.message);
      if (value.active === true) {
        this.Upload = false;
        console.log('done');
      } else {
        console.log('not done');
      }
    });
    this.submitBut = false;
    this.Upload = true;
    // this.router.navigate(['/', 'homePage']);
  }

  askQuestion() {
    this.submitBut = false;
    this.Upload = true;
    console.log('chekcing this');
    this.question = this.form2.value.question;
    this.service.askQuestion(this.form2.value.question);
    this.a = interval(3000).subscribe((x) => {
      this.AnswerStatus();
    });
    this.form2.reset();
  }

  AnswerStatus() {
    this.service.getAnswerStatus();
    this.AnswerReadyListenerSub = this.service.CheckAnswer()
    .subscribe((ready) => {
        // this.answerReady = ready;
      if (ready === true) {
        this.Answer = this.service.getAnswer(this.question)
        .subscribe((value) => {
        if (value.value === true) {
          const list: Qna = {question: value.question, answer: value.answer};
          let flag = 0;
          let i = 0;
          if (this.qNa.length === 0) {
            this.qNa.push(list);
          } else {
            for (i = 0 ; i < this.qNa.length; i++) {
              if ( this.qNa[i].question === this.question) {
                flag = 1;
              }
              if ( (flag === 0) && (i === this.qNa.length - 1) ) {
                this.qNa.push(list);
              }
            }
          }

          // for (i = 0 ; i < this.qNa.length; i++) {
          //   if ( this.qNa[i] === list) {
          //     flag = 1;
          //     break;
          //   }
          // }
          // if ( flag === 0) {
          //   this.qNa.push(list);
          // }
          this.Upload = false;
          console.log(this.qNa);
          this.Answer.unsubscribe();
        }
        });
        this.a.unsubscribe();
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

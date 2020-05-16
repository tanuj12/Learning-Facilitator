import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private DownloadReady = new Subject<boolean>();
  private AnswerReady = new Subject<boolean>();
  private userPresent = null;
  constructor(private http: HttpClient, private router: Router) { }
  sendPasswordResetMail(email: string) {
    const body = { email };
    return this.http
    .post<{message: string, sent: boolean}>('https://learning-facilitator.herokuapp.com/passwordreset', body);
  }

  upload(files: File[]) {
    console.log(files);
    console.log('It was here');
    const body = new FormData();
    for (const file of files) {
      body.append('f', file, file.name);
    }
    this.http.post<{message: string, sent: boolean}>('https://learning-facilitator.herokuapp.com/Upload', body)
    .subscribe((value) => {
      console.log(value.message);
    });
  }

  checkDownload() {
   return this.DownloadReady.asObservable();
  }

  getDownloadReadystatus() {
    this.http.get<{value: boolean, message: string}>('https://learning-facilitator.herokuapp.com/DownloadStatus')
    .subscribe((response) => {
      if (response.value !== true) {
        // console.log('Download not Ready');
        this.DownloadReady.next(false);
      } else {
        // console.log('Download Ready');
        this.DownloadReady.next(true);
      }
    });
  }

  uploadStatusDoc(file: File) {
  const body = new FormData();
  console.log(file.name);
  body.append('f', file, file.name);
  return this.http
  .post<{message: string, active: boolean}>('https://learning-facilitator.herokuapp.com/UploadQuestionDoc', body);
  }

  downloadFile() {
  return this.http.get<{message: string, active: boolean}>('https://learning-facilitator.herokuapp.com/downloadfile');
  }

  askQuestion(question: string) {
    const body = {
      question
    };
    console.log(question);
    this.http.post<{message: string, active: boolean}>
    ('https://learning-facilitator.herokuapp.com/askQuestion', body)
    .subscribe((value) => {
      console.log('done');
    });
  }

  getAnswerStatus() {
    this.http.get<{value: boolean, message: string}>('https://learning-facilitator.herokuapp.com/AnswerStatus')
    .subscribe((response) => {
      if (response.value !== true) {
        // console.log('Download not Ready');
        this.AnswerReady.next(false);
      } else {
        // console.log('Download Ready');
        this.AnswerReady.next(true);
      }
    });
  }

  CheckAnswer() {
    return this.AnswerReady.asObservable();
  }

  getAnswer(question: string) {
    const body = {
      question
    };
    return this.http
    .post<{value: boolean, question: string, answer: string}>
    ('https://learning-facilitator.herokuapp.com/getAnswer', body);
  }
}

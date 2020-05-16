import { AbstractControl } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

export const mimeType = (control: AbstractControl): Promise<{[key: string]: any}> | Observable<{[key: string]: any}> => {
  const file = control.value as File;
  const fileReader = new FileReader();
  const frObs = Observable.create( (observer: Observer<{[key: string]: any}>) => {
    fileReader.addEventListener('loadend', () => {
      let isValid = false;
      const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4);
      let header = '';
      let i = 0;
      for (i = 0; i < arr.length; i++) {
        header += arr[i].toString(16);
      }
      switch (header) {
        case '504b34':
          // console.log('was here');
          isValid = true;
          break;
        default:
          // console.log(header);
          isValid = false;
          break;
      }
      if ( isValid) {
        // console.log('Here too');
        observer.next(null);
      } else {
        observer.next({invalidMimeType: true});
      }
      observer.complete();
    });
    fileReader.readAsArrayBuffer(file);
  });
  return frObs;
};

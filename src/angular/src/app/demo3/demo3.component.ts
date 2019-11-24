import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { UploadFile } from 'src/models/upload-file';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  myForm: FormGroup;
  selectedFile: File;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      file: ['']
    });
  }

  selectFile(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.myForm.get('file').setValue(event.target.files[0]);
    }
  }

  uploadFile() {
    let file: UploadFile = new UploadFile();
    file.type = 1;
    file.file = this.selectedFile;
    const d: FormData = new FormData();
    d.append('file', this.myForm.get('file').value);
    d.append('t', file.type.toString());
    console.log(d.get('file'));
    //console.log(d.get('t'));
    
    this.http.post<string>('http://localhost:8000/upload', d, {
      reportProgress: true,
      observe: 'events'
    }).map(event => this.getEventMessage(event, d)).subscribe(res => console.log(res));
  }

  getEventMessage(event: HttpEvent<any>, fd: FormData) {
    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
      case HttpEventType.Response:
        return this.apiResponse(event);
      default:
        return `File ${(fd.get('file') as File).name} - upload event: ${event.type.toString()}`
    }
  }

  fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message: percentDone };
  }

  apiResponse(event) {
    return event.body;
  }
}

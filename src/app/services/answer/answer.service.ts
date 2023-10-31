import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ianswer } from 'src/app/interfaces/ianswer';
import { environment } from 'src/environments/environment.development';

const apiURLquestion=`${environment.apiURL}/Answers`;

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private httpclient : HttpClient) { }

  getAnswer():Observable<Ianswer[]> {
    return this.httpclient.get<Ianswer[]>(apiURLquestion);
  }
}

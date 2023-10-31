import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iquestion } from 'src/app/interfaces/iquestion';
import { environment } from 'src/environments/environment.development';

const apiURLquestion=`${environment.apiURL}/Questions`;

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpclient : HttpClient) { }

  getQuestion():Observable<Iquestion[]> {
    return this.httpclient.get<Iquestion[]>(apiURLquestion);
  }

  get(currentPage: number, pageSize: number):Observable<HttpResponse<any>> {
    let url = `http://localhost:3000/Questions?_page=${currentPage}&_limit=${pageSize}`;
    return this.httpclient.get<HttpResponse<any>>(url,{observe: 'response'});
  }
}

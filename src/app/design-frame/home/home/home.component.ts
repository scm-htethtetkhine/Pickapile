import { Observable } from 'rxjs';
import { Iquestion } from './../../../interfaces/iquestion';
import { Component } from '@angular/core';
import { Ianswer } from 'src/app/interfaces/ianswer';
import { AnswerService } from 'src/app/services/answer/answer.service';
import { QuestionService } from 'src/app/services/question/question.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  questionData!: Iquestion[];
  answerData!: Ianswer[];
  totalCount : number = 0;
  currentPageNumber: number = 1;
  pageSize = 3;
  pageIndex = 0;

  constructor(public questionService: QuestionService , public answerService: AnswerService) { }

  ngOnInit(): void {
    this.GetQuestion();
    this.GetAnswer();
    this.get();
  }

  GetQuestion() {
    return this.questionService.getQuestion().subscribe((data: Iquestion[]) => {
      this.questionData = data;
    });
  }

  GetAnswer() {
    return this.answerService.getAnswer().subscribe((data: Ianswer[]) => {
      this.answerData = data;
    });
  }

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  get() {
    this.questionService.get((this.pageIndex + 1), this.pageSize).subscribe((response) => {
      this.questionData = response.body as Iquestion[];
      this.totalCount = response.headers.get('X-Total-Count')?
      Number(response.headers.get('X-Total-Count')) : 0;
    });
  }

  handlePageEvent(e:PageEvent) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.get()
  }
}

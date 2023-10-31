import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ianswer } from 'src/app/interfaces/ianswer';
import { Iquestion } from 'src/app/interfaces/iquestion';
import { AnswerService } from 'src/app/services/answer/answer.service';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {
  questionData!: Iquestion[];
  answerData!: Ianswer[];
  pilecard_answer: number;

  constructor(public questionService: QuestionService , public answerService: AnswerService, private actRoute: ActivatedRoute) { 
    this.pilecard_answer = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.GetQuestion();
    this.GetAnswer();
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
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ianswer } from 'src/app/interfaces/ianswer';
import { Iquestion } from 'src/app/interfaces/iquestion';
import { AnswerService } from 'src/app/services/answer/answer.service';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {
  questionData!: Iquestion[];
  answerData!: Ianswer[];
  pilecard_id: number;
  pilecard_answer: number;

  constructor(public questionService: QuestionService , public answerService: AnswerService, private actRoute: ActivatedRoute) { 
    this.pilecard_id = this.actRoute.snapshot.params['id'];
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

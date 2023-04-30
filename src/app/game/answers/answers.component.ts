import { Component, Input } from '@angular/core';
import { Agrupacion } from 'src/app/models/agrupacion.model';
import { Answer } from 'src/app/models/answer.model';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
})
export class AnswersComponent {
  agrupacion: Agrupacion = {
    _id: '1',
    name: 'Los millonarios',
  };

  @Input() answersList: Answer[] = [
    {
      agrupacion: this.agrupacion,
      isCorrect: false,
    },
  ];

  @Input() answersList2: Answer[] = [
    {
      agrupacion: this.agrupacion,
      isCorrect: false,
    },
  ];
}

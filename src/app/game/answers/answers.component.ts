import { Component, Input } from '@angular/core';
import { Agrupacion } from 'src/app/models/agrupacion.model';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
})
export class AnswersComponent {
  @Input() answersList: Agrupacion[];
}

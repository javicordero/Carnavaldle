import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  @Input() timeLeft: number;
  @Output() startGame: EventEmitter<boolean> = new EventEmitter<boolean>();
}

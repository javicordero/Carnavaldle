import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-timerButton',
  templateUrl: './timerButton.component.html',
  styleUrls: ['./timerButton.component.scss'],
})
export class TimerButtonComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  timeLeft: number = 10;
  @Input() timeLeft$: Subject<number>;

  @Output() startGameEventEmitter: EventEmitter<void> =
    new EventEmitter<void>();
  @Input() gameStarted: boolean;

  // Circle timer configuration
  FULL_DASH_ARRAY: number = 283;
  WARNING_THRESHOLD: number = 5;
  ALERT_THRESHOLD: number = 3;

  colorCodes = {
    info: {
      color: 'green',
    },
    warning: {
      color: 'orange',
      threshold: this.WARNING_THRESHOLD,
    },
    alert: {
      color: 'red',
      threshold: this.ALERT_THRESHOLD,
    },
  };

  timeLimit: number = 10;
  remainingPathColor = this.colorCodes.info.color;

  // Button text
  @Input() buttonText: string = 'Empezar';

  ngOnInit() {
    this.timeLeft$.subscribe((timeLeft) => {
      this.timeLeft = timeLeft;
      this.setCircleDasharray();
      this.setRemainingPathColor(this.timeLeft);
    });
  }

  startGame() {
    this.startGameEventEmitter.emit();
  }

  setRemainingPathColor(timeLeft: any) {
    const { alert, warning, info } = this.colorCodes;
    if (timeLeft <= alert.threshold) {
      this.remainingPathColor = alert.color;
      return;
    }
    if (timeLeft <= warning.threshold) {
      this.remainingPathColor = warning.color;
      return;
    }
    this.remainingPathColor = info.color;
  }

  calculateTimeFraction() {
    const rawTimeFraction = this.timeLeft / this.timeLimit;
    return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction);
  }

  setCircleDasharray() {
    const circleDasharray = `${(
      this.calculateTimeFraction() * this.FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById('base-timer-path-remaining')
      .setAttribute('stroke-dasharray', circleDasharray);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

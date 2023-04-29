import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tries',
  templateUrl: './tries.component.html',
  styleUrls: ['./tries.component.scss'],
})
export class TriesComponent {
  @Input() tries: number;
  @Input() maxTries: number;
}

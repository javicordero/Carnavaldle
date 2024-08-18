import { Component, Input } from '@angular/core';
import { MatchResults } from 'src/app/models/match-result.class';

@Component({
  selector: 'app-match-resutls',
  templateUrl: './match-resutls.component.html',
  styleUrls: ['./match-resutls.component.scss'],
})
export class MatchResutlsComponent {
  @Input() resutls: MatchResults;
  @Input() isMatchStarted: boolean = false;
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchContainer } from './match.container';
import { MatchResutlsComponent } from './match-resutls/match-resutls.component';
import { GameModule } from '../game/game.module';

@NgModule({
  declarations: [MatchContainer, MatchResutlsComponent],
  imports: [CommonModule, GameModule],
  exports: [MatchContainer],
})
export class MatchModule {}

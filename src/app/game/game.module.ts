import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameContainer } from './game.container';
import { QuoteComponent } from './quote/quote.component';
import { GuessboxComponent } from './guessbox/guessbox.component';
import { AnswersComponent } from './answers/answers.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { TriesComponent } from './tries/tries.component';
import { TimerButtonComponent } from './timerButton/timerButton.component';

@NgModule({
  declarations: [
    GameContainer,
    QuoteComponent,
    GuessboxComponent,
    AnswersComponent,
    TriesComponent,
    TimerButtonComponent,
  ],
  imports: [CommonModule, AutocompleteLibModule],
  exports: [GameContainer],
})
export class GameModule {}

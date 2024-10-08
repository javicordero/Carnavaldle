import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameContainer } from './game.container';
import { QuoteComponent } from './quotes/quote/quote.component';
import { GuessboxComponent } from './guessbox/guessbox.component';
import { AnswersComponent } from './answers/answers.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { TriesComponent } from './tries/tries.component';
import { TimerButtonComponent } from './timerButton/timerButton.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    GameContainer,
    QuoteComponent,
    GuessboxComponent,
    AnswersComponent,
    TriesComponent,
    TimerButtonComponent,
    QuotesComponent,
  ],
  imports: [CommonModule, AutocompleteLibModule, CarouselModule],
  exports: [GameContainer],
})
export class GameModule {}

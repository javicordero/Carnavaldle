import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollaborateModule } from './collaborate/collaborate.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameModule,
    LeaderboardModule,
    HeaderModule,
    BrowserAnimationsModule,
    CollaborateModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

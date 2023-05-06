import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollaborateModule } from './collaborate/collaborate.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './header/header.module';
import { SpinnerModule } from './spinner/spinner.module';
import { LoadingInterceptor } from './loading.interceptor';

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
    SpinnerModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}

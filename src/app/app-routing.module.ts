import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameContainer } from './game/game.container';
import { CollaborateComponent } from './collaborate/collaborate.component';
import { LeaderboardContainer } from './leaderboard/leaderboard.container';
import { SignInContainer } from './sign-in/sign-in.container';
import { SignUpContainer } from './sign-up/sign-up.container';
import { MatchContainer } from './match/match.container';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'match',
    pathMatch: 'full',
  },
  {
    path: 'match',
    component: MatchContainer,
  },
  {
    path: 'game',
    component: GameContainer,
  },
  {
    path: 'colaborar',
    component: CollaborateComponent,
  },
  {
    path: 'clasificacion',
    component: LeaderboardContainer,
  },
  {
    path: 'iniciar-sesion',
    component: SignInContainer,
  },
  {
    path: 'registro',
    component: SignUpContainer,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

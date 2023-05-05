import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameContainer } from './game/game.container';
import { CollaborateComponent } from './collaborate/collaborate.component';
import { LeaderboardContainer } from './leaderboard/leaderboard.container';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

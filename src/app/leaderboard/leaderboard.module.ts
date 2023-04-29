import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardContainer } from './leaderboard.container';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [LeaderboardContainer, TableComponent],
  imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule],
  exports: [LeaderboardContainer],
})
export class LeaderboardModule {}

import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[];

  dataSource: any; // Ver tipo any este

  @Input() allUsers: User[];
  @Input() loggedUser: User;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
    this.displayedColumns = [
      'position',
      'username',
      'gamesPlayed',
      'gamesWon',
      'gamesWonFirstTry',
      'streak',
      'maxStreak',
    ];
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.allUsers);
  }

  ngAfterViewInit() {
    this.sort.start = 'desc';
    this.sort.disableClear = true;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: any) {}
}

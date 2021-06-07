import { User } from './../../models/User';
import { Component, Input, OnInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() users!: User[];
  displayedColumns: string[] = ['username', 'city', 'actions'];
  constructor() { }

  ngOnInit(): void {
  }
  changeSortingParams(data: Sort) {
    console.log(data)
  }
}

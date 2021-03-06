import { Country } from './../../models/Country';
import { UsersService } from './../../users.service';
import { User } from './../../models/User';
import { EditDialogComponent } from './../edit-dialog/edit-dialog.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  countries: Country[] = [];
  users$!: Observable<User[]>
  isSmallScreen!: boolean;
  constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog, private usersService: UsersService) {
    this.users$ = this.usersService.getUsers();
    this.usersService.getUserCountries().subscribe(countries => this.countries = countries);
   }

  ngOnInit(): void {
    this.breakpointObserver.observe('(max-width: 720px)').subscribe(state => {
      this.isSmallScreen = state.matches
    });
  }

  openDialog() {
    this.dialog.open(EditDialogComponent, {
      disableClose: true,
      hasBackdrop: false,
      data: {
        countries: this.countries
      }
    }).afterClosed().subscribe(v => console.log(v));
  }

}

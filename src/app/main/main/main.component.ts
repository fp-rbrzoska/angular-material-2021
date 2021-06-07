import { EditDialogComponent } from './../edit-dialog/edit-dialog.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isSmallScreen!: boolean;
  constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.breakpointObserver.observe('(max-width: 720px)').subscribe(state => {
      this.isSmallScreen = state.matches
    });
  }

  openDialog() {
    this.dialog.open(EditDialogComponent, {
      disableClose: true,
      hasBackdrop: false
    }).afterClosed().subscribe(v => console.log(v));
  }

}

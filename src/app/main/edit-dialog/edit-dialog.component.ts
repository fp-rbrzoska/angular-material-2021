import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditDialogComponent>) { }

  ngOnInit(): void {
  }


  cancel() {
    this.dialogRef.close(false)
  }

  save() {
    this.dialogRef.close(true)
  }

}

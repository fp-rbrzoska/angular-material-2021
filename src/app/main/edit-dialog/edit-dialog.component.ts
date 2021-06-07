import { Country } from './../../models/Country';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    country: new FormControl()
  })
  constructor(private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { countries: Country[]}) { }

  ngOnInit(): void {
  }


  cancel() {
    this.dialogRef.close(false)
  }

  save() {
    this.dialogRef.close(true)
  }

}

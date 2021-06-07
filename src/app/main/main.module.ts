import { MaterialModule, MY_CONST } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    EditDialogComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class MainModule { }

import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test/test.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    TestComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TestRoutingModule
  ]
})
export class TestModule { }

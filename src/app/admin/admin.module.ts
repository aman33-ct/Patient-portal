import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }

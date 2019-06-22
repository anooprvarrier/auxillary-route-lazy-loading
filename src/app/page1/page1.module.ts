import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      component: Page1Component,
      path: '',
      pathMatch: 'full',
    }]),
  ],
  declarations: [Page1Component]
})
export class Page1Module { }

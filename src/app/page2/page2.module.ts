import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      component: Page2Component,
      path: '',
      pathMatch: 'full',
    }]),
  ],
  declarations: [Page2Component]
})
export class Page2Module { }

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      component: ModalComponent,
      path: '',
      pathMatch: 'full',
    }]),
  ],
  declarations: [ModalComponent]
})
export class ModalModule { }

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { SyncModalComponent } from './sync-modal/sync-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    Page3Component,
    Page4Component,
    SyncModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      loadChildren: './page1/page1.module#Page1Module',
      path: '',
    }, {
      loadChildren: './page2/page2.module#Page2Module',
      path: 'page2',
    }, {
      component: Page3Component,
      path: 'page3',
    }, {
      component: Page4Component,
      path: 'page4',
    }, {
      component: SyncModalComponent,
      outlet: 'aux',
      path: 'syncmodal',
    }, {
      loadChildren: './modal/modal.module#ModalModule',
      outlet: 'aux',
      path: 'modal',
    }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main.component';

@NgModule({
  declarations: [
    MainComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  entryComponents: [
    MainComponent,
    AboutComponent
  ]
})
export class MainModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainModule} from './main/main.module';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './main/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

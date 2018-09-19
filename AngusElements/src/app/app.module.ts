import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphsModule } from './graphs/graphs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GraphsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

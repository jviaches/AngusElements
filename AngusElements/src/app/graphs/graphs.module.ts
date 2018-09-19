import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarsComponent } from './bars/bars.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ BarsComponent],
  exports: [ BarsComponent]
})
export class GraphsModule { }

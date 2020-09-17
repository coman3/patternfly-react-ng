import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { SwitchModule } from './switch/switch.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    SwitchModule
  ]
})
export class CoreModule { }

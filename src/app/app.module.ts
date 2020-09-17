import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from "projects/pattern-fly-components/src/lib/core/button/button.module";
import { SwitchModule } from "projects/pattern-fly-components/src/lib/core/switch/switch.module";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    SwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

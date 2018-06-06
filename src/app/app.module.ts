import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopMenu } from './topmenu/app.component.topmenu';
import { yoDawgComponent } from './shared/yo-dawg.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenu,
    yoDawgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

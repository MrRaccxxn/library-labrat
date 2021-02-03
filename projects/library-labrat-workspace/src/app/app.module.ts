import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibraryLabratModule } from 'library-labrat';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    LibraryLabratModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';

import { DatabindService } from './services/databind.service';

@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatabindService],
  bootstrap: [AppComponent]
})
export class AppModule { }

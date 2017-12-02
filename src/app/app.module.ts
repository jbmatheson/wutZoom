import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImgLoaderComponent } from './img-loader/img-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgLoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

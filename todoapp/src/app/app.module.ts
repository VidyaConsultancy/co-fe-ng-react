import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BgcolorDirective } from './common/directives/bgcolor/bgcolor.directive';
import { FilesizePipe } from './common/pipes/filesize/filesize.pipe';

@NgModule({
  declarations: [AppComponent, BgcolorDirective, FilesizePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

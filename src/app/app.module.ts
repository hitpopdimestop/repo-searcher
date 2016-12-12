import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HeaderComponent } from './header/header.component';
import { SearchService } from './search.service';
import { ErrorComponent } from './error/error.component';
import { ReadmeComponent } from './readme/readme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    ReadmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

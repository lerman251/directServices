import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FormsModule } from '@angular/forms';
import { RandomBGColorDirective } from './RandomBGColorDirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchResultsComponent,
    RandomBGColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

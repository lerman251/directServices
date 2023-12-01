import { Component, Input } from '@angular/core';
import { SearchHistory } from '../searchHistory.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentSearchTerm = '';
  addSearch() {
    this.searchHistory.addNewSearch(this.currentSearchTerm);
    this.currentSearchTerm = '';
  }
  constructor(private searchHistory: SearchHistory) {

  }
}

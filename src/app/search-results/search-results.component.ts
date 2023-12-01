import { Component, Input } from '@angular/core';
import { SearchHistory } from '../searchHistory.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  @Input() searchList:[] = [];
  constructor(public searchHistory: SearchHistory) {

  }
}

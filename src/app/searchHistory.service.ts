export class SearchHistory {
    searchList: string[] = [''];
    addNewSearch(currentSearchTerm: string) {
        this.searchList.push(currentSearchTerm);
    }
}
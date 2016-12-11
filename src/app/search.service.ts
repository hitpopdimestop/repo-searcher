import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SearchService {

  public search$ = new EventEmitter<string>();

  onSearch(e) {
    this.search$.emit(e);
  }

}

import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'rs-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  private search: string;
  private user;

  constructor(private _search: SearchService, private _http: HttpService) {
    this._http.user$.subscribe(
      data => {
        this.user = data;
      }
    );
  }

  onKeyUp(event) {
    if (event.code === "Enter" && this.search) {
      if (this.search.trim()) {
        this._search.onSearch(this.search.trim());
      }
    }
  }

  onSearch() {
    if (this.search) {
      if (this.search.trim()) {
        this._search.onSearch(this.search.trim());
      }
    }
  }

}

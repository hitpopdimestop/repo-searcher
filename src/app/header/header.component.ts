import { Component, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';
import { HttpService } from '../http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rs-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  private search: string;
  private user;
  private errorSubscription: Subscription;

  constructor(private _search: SearchService, private _http: HttpService) {
    this._http.user$.subscribe(
      data => {
        this.user = data;
      }
    );

    this.errorSubscription = this._http.error$.subscribe(
      data => this.user = null
    )
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

import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { HttpService } from './http.service';
import { SearchService } from './search.service';

@Component({
  selector: 'rs-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private _http:HttpService, private _search:SearchService) {
    this.searchSubscription = _search.search$.subscribe(
      e => {
      this.search = e;
      this._http.onFetch(this.search);
      this.error = null;
      }
    );

    this.reposSubscription = this._http.repos$.subscribe(
      data => {
        this.repos = data;
      }
    );

    this.errorSubscription = this._http.error$.subscribe(
      data => {
        this.repos = null;
        if (data.message) {
          this.error = `Server response: ${data.message}`
        } else this.error = `Can't reach the server. Check your internet connection.`;
      }
    )
  }

  private error;
  private search;
  private repos;
  private searchSubscription: Subscription;
  private reposSubscription: Subscription;
  private errorSubscription: Subscription;
}

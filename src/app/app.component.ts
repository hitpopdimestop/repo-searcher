import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { HttpService } from './http.service';
import { SearchService } from './search.service';

@Component({
  selector: 'rs-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private error = {message: ""};
  private search;
  private repos;
  private readme = {content: ""};
  private searchSubscription: Subscription;
  private reposSubscription: Subscription;
  private errorSubscription: Subscription;
  private readmeSubscription: Subscription;

  constructor(private _http:HttpService, private _search:SearchService) {
    this.searchSubscription = _search.search$.subscribe(
      e => {
      this.search = e;
      this._http.onFetch(this.search);
      }
    );

    this.reposSubscription = this._http.repos$.subscribe(
      data => {
        this.repos = data;
      }
    );

    this.errorSubscription = this._http.error$.subscribe(
      data => {
        if (data.message) {
          this.error.message = `Something's wrong :( Server response: ${data.message}`
        } else this.error.message = `Can't reach the server. Check your internet connection.`;
      }
    );

    this.readmeSubscription = this._http.readme$.subscribe(
      data => {
        this.readme.content = data;
      }
    );
  }

  getReadme(url) {
    url += "/contents/README.md";
    this._http.getReadme(url);
  }

}

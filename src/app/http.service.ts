import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  private repos;
  public repos$ = new EventEmitter();
  private user;
  public user$ = new EventEmitter();
  private error;
  public error$ = new EventEmitter();
  private readme: string;
  public readme$ = new EventEmitter();

  onFetch(username) {
    this._http.get(`https://api.github.com/users/${username}/repos`).subscribe(
      data => {
        this.repos = data.json();
        this.error = null;
        this.repos$.emit(this.repos);
        this.userpicFetch(username);
      },
      error => {
        this.error = error.json();
        this.error$.emit(this.error);
      }
    )
  }

  userpicFetch(username) {
    this._http.get(`https://api.github.com/users/${username}`).subscribe(
      data => {
        this.user = data.json();
        this.user$.emit(this.user);
      },
      error => {
        this.error = error.json();
        this.error$.emit(this.error);
      }
    )
  }

  getReadme(url) {
    this._http.get(url).subscribe(
      data => {
        this.readme = atob(data.json().content);
        this.readme$.emit(this.readme);
      },
      error => {
        this.error = error.json();
        this.error$.emit(this.error);
      }
    )
  }

}

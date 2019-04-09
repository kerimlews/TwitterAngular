import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

const ENDPOINT_BASE = '/api/';

@Injectable()
export class UserOverviewService {

  constructor(private http: HttpClient) {
  }

  fetchNumberOfFollowers(): Observable<number> {
    return this.http.get<number>(ENDPOINT_BASE + 'count-followers');
  }

  fetchNumberOfFollowing(): Observable<number> {
    return this.http.get<number>(ENDPOINT_BASE + 'count-following');
  }
}

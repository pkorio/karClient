import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {ActivatedRoute} from '@angular/router';

@Injectable()
export class TransformedWordService {
  /**private transformUrl = 'http://localhost:8080/transform';*/
  transformUrl: string;
  constructor(private http: Http) { }

  sayAWord(inputToken: string): Observable<any> {
    /**Add input parameter to the URL*/
    this.transformUrl = '';
    this.transformUrl = 'http://localhost:8080/transform' + '?inputToken=' + inputToken;
    return this.http.get(this.transformUrl).map((response: Response) => response.json());
  }
}

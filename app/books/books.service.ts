import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IApiResponse } from './interfaces/book.response.interface';
import { IBookResult } from './interfaces/book.interface';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BooksService {
    //https://gateway.marvel.com:443/v1/public/characters/1009268/comics?limit=89&apikey=17cfa7fa545ce17977e2cb95c5e97042
    private _limit: string = 'limit=4';
    private _apiKey: string = 'apikey=17cfa7fa545ce17977e2cb95c5e97042';
    private _marvelUrlBooks: string = 'https://gateway.marvel.com:443/v1/public/characters/'
    constructor(private _http: Http) {}

    getBooks(characterId: number,  offset: number): Observable<IApiResponse> {
        let queryString: string =  this._marvelUrlBooks + characterId + '/comics?' + this._limit + '&' + this._apiKey + '&offset=' + offset;
       return this._http.get(queryString)
            .map((response: Response)=> <IApiResponse> response.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError)
    }

    handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error.');
    }

}
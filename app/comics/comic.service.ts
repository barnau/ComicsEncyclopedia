import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IApiResponse } from './interfaces/api-response';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ComicService {
    private _allComicsUrl = 'https://gateway.marvel.com:443/v1/public/comics?apikey=17cfa7fa545ce17977e2cb95c5e97042';
    private _allCharactersUrl = 'https://gateway.marvel.com:443/v1/public/characters?apikey=17cfa7fa545ce17977e2cb95c5e97042&nameStartsWith='
    constructor(private _http: Http) {}

    getComics(): Observable<Object[]> {

        return  this._http.get(this._allComicsUrl)
        .map((response: Response)=> <Object[]> response.json())
        .do( data => console.log('All comics ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getCharacters(name: string): Observable<IApiResponse> {
        return this._http.get(this._allCharactersUrl + name)
            .map((response: Response) => <IApiResponse> response.json())
            .do( data => console.log('All Characters' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/do');
var ComicService = (function () {
    function ComicService(_http) {
        this._http = _http;
        this._allComicsUrl = 'https://gateway.marvel.com:443/v1/public/comics?apikey=17cfa7fa545ce17977e2cb95c5e97042';
        this._allCharactersUrl = 'https://gateway.marvel.com:443/v1/public/characters?apikey=17cfa7fa545ce17977e2cb95c5e97042&nameStartsWith=';
        this._characterPrefixurl = 'https://gateway.marvel.com:443/v1/public/characters/';
        this._apiKey = '?apikey=17cfa7fa545ce17977e2cb95c5e97042';
    }
    ComicService.prototype.getComics = function () {
        return this._http.get(this._allComicsUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All comics ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ComicService.prototype.getCharacters = function (name, numResults, offset) {
        console.log("from get characters in service", this._allCharactersUrl + name + '&limit=' + numResults + '&offset=' + offset);
        return this._http.get(this._allCharactersUrl + name + '&limit=' + numResults + '&offset=' + offset)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All Characters' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ComicService.prototype.getCharacterById = function (id) {
        console.log(this._characterPrefixurl + id + this._apiKey);
        return this._http.get(this._characterPrefixurl + id + this._apiKey)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("Character returned: ", JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ComicService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ComicService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ComicService);
    return ComicService;
}());
exports.ComicService = ComicService;
//# sourceMappingURL=comic.service.js.map
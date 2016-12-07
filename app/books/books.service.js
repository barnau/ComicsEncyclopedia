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
var BooksService = (function () {
    function BooksService(_http) {
        this._http = _http;
        //https://gateway.marvel.com:443/v1/public/characters/1009268/comics?limit=89&apikey=17cfa7fa545ce17977e2cb95c5e97042
        this._limit = 'limit=4';
        this._apiKey = 'apikey=17cfa7fa545ce17977e2cb95c5e97042';
        this._marvelUrlBooks = 'https://gateway.marvel.com:443/v1/public/characters/';
    }
    BooksService.prototype.getBooks = function (characterId, offset) {
        var queryString = this._marvelUrlBooks + characterId + '/comics?' + this._limit + '&' + this._apiKey + '&offset=' + offset;
        return this._http.get(queryString)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
    };
    BooksService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Server error.');
    };
    BooksService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BooksService);
    return BooksService;
}());
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map
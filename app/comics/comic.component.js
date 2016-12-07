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
var comic_service_1 = require('./comic.service');
var ComicComponent = (function () {
    function ComicComponent(_comicService) {
        this._comicService = _comicService;
    }
    ComicComponent.prototype.onPageClicked = function (pageInfo, characterName) {
        console.log(pageInfo);
        this.currentPage = pageInfo;
        this.getCharacterId(this.characterName, 8, pageInfo.offset);
    };
    ComicComponent.prototype.getCharacterId = function (characterName, numResults, offset) {
        var _this = this;
        this.errorMessage = undefined;
        this.characterName = this.characterName === undefined ? characterName : this.characterName;
        offset = offset === undefined ? 0 : offset;
        numResults = numResults === undefined ? 8 : numResults;
        this._comicService.getCharacters(characterName, numResults, offset)
            .subscribe(function (characters) { return _this.matchingCharacterResponse = characters; }, function (error) { return _this.errorMessage = error; }, function () {
            _this.matchingCharacters = _this.matchingCharacterResponse.data.results;
            console.log(_this.matchingCharacters);
            _this.totalResultCount = _this.matchingCharacterResponse.data.total;
            if (_this.totalResultCount < 1) {
                _this.errorMessage = 'Sorry, Couldn\'t find any results for "' + _this.characterName + '".';
            }
            console.log(_this.totalResultCount);
        });
    };
    ComicComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['./comic.component.css'],
            templateUrl: './comic.component.html'
        }), 
        __metadata('design:paramtypes', [comic_service_1.ComicService])
    ], ComicComponent);
    return ComicComponent;
}());
exports.ComicComponent = ComicComponent;
//# sourceMappingURL=comic.component.js.map
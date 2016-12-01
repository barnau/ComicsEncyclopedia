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
var comic_service_1 = require('../comics/comic.service');
var router_1 = require('@angular/router');
var DisplayCharacter = (function () {
    function DisplayCharacter() {
    }
    return DisplayCharacter;
}());
var ComicDetailsComponent = (function () {
    function ComicDetailsComponent(_route, _router, _comicService) {
        this._route = _route;
        this._router = _router;
        this._comicService = _comicService;
    }
    ComicDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        this._comicService.getCharacterById(id)
            .subscribe(function (character) { return _this.character = character.data.results[0]; }, function (error) { return _this.errorMessage = error; }, function () {
            console.log('Character', _this.character);
        });
    };
    ComicDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './comic-details.component.html',
            styleUrls: ['./comic-details.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, comic_service_1.ComicService])
    ], ComicDetailsComponent);
    return ComicDetailsComponent;
}());
exports.ComicDetailsComponent = ComicDetailsComponent;
//# sourceMappingURL=comic-details.component.js.map
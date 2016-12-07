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
var books_service_1 = require('./books.service');
var BooksComponent = (function () {
    function BooksComponent(_booksService) {
        this._booksService = _booksService;
    }
    BooksComponent.prototype.onPageClicked = function (pageInfo) {
        console.log(pageInfo);
        this.currentPage = pageInfo;
        // this.getCharacterId(this.characterName, 8, pageInfo.offset)
        this.getBooks(pageInfo.offset);
    };
    BooksComponent.prototype.getBooks = function (offset) {
        var _this = this;
        this._booksService.getBooks(this.characterId, offset)
            .subscribe(function (books) { return _this.matchingBooksResponse = books; }, function (error) { return _this.errorMessage = error; }, function () {
            _this.matchingBooks = _this.matchingBooksResponse.data.results;
            console.log('end result :', _this.matchingBooksResponse);
            _this.totalResultCount = _this.matchingBooksResponse.data.total;
        });
    };
    BooksComponent.prototype.ngOnInit = function () {
        this.getBooks(0);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BooksComponent.prototype, "characterId", void 0);
    BooksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mv-books',
            templateUrl: './books.component.html'
        }), 
        __metadata('design:paramtypes', [books_service_1.BooksService])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map
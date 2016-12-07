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
var PaginationComponent = (function () {
    function PaginationComponent(_comicService) {
        this._comicService = _comicService;
        this.allPageInfo = [];
        this.showingPageInfo = [];
        this.pageClicked = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.next = function () {
        alert("next clicked");
    };
    PaginationComponent.prototype.last = function () {
        alert("last clicked");
    };
    PaginationComponent.prototype.ngOnChanges = function () {
        this.allPageInfo = [];
        this.numPages = Math.ceil(this.total / this.numPerPage);
        console.log("numPages", this.numPages);
        for (var i = 1; i <= this.numPages; i++) {
            this.allPageInfo.push({ pageNumber: i, offset: this.numPerPage * (i - 1) });
        }
        this.showingPageInfo = this.allPageInfo.slice(0, 10);
        console.log("pageInfo array", this.allPageInfo);
    };
    PaginationComponent.prototype.onClick = function (p) {
        this.selectedPage = p.pageNumber;
        this.showingPageInfo = this.allPageInfo.slice(this.selectedPage - 6, this.selectedPage + 4);
        this.showingPageInfo = this.showingPageInfo.length < 10 ? this.allPageInfo.slice(0, 10) : this.showingPageInfo;
        console.log("showingPageInfo", this.showingPageInfo);
        this.pageClicked.emit(p);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "total", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "numPerPage", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PaginationComponent.prototype, "pageClicked", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'mv-pagination',
            templateUrl: 'app/shared/pagination.component.html',
        }), 
        __metadata('design:paramtypes', [comic_service_1.ComicService])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map
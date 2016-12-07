import  { Component, OnChanges, Input,
          Output, EventEmitter } from '@angular/core';
import { ComicService } from '../comics/comic.service';
import { IPageInfo } from '../comics/interfaces/page-info';



@Component({
    selector: 'mv-pagination',
    templateUrl: 'app/shared/pagination.component.html',
    
    
})
export class PaginationComponent {
    @Input() total: number;
    @Input() numPerPage: number;
    selectedPage: number;
    numPages: number;
    allPageInfo: IPageInfo[] = [];
    showingPageInfo: IPageInfo[] = [];
    @Output() pageClicked: EventEmitter<Object> = new EventEmitter<Object>();

    constructor(private _comicService: ComicService) {}

    next(): void {
        alert("next clicked")    
    }

    last(): void {
        alert("last clicked")
    }

    

    ngOnChanges(): void {
        this.allPageInfo = [];
        this.numPages = Math.ceil(this.total / this.numPerPage);
        console.log("numPages", this.numPages);
        for (var i = 1; i <= this.numPages; i++) {
            this.allPageInfo.push({pageNumber: i, offset: this.numPerPage * (i - 1)})
        }
        this.showingPageInfo = this.allPageInfo.slice(0,10);
        console.log("pageInfo array", this.allPageInfo);
        
  
    }

    onClick(p: IPageInfo) {
    this.selectedPage = p.pageNumber;

    

    this.showingPageInfo = this.allPageInfo.slice(this.selectedPage - 6, this.selectedPage + 4);
    this.showingPageInfo = this.showingPageInfo.length < 10 ? this.allPageInfo.slice(0,10) : this.showingPageInfo;
    console.log("showingPageInfo", this.showingPageInfo);
    this.pageClicked.emit(p);
    
    }

}
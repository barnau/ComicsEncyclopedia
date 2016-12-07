import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { IApiResponse } from './interfaces/book.response.interface';
import { IBookResult } from './interfaces/book.interface';
import { IPageInfo } from '../comics/interfaces/page-info';

@Component({
    moduleId: module.id,
    selector: 'mv-books',
    templateUrl: './books.component.html'

})
export class BooksComponent implements OnInit {
   
    
    matchingBooksResponse: IApiResponse;
    matchingBooks: IBookResult[];
    errorMessage: string;
    currentPage: IPageInfo;
    totalResultCount: number;
    @Input() characterId: number;


    constructor(private _booksService: BooksService) {}

    onPageClicked(pageInfo: IPageInfo) {
        console.log(pageInfo);
        this.currentPage = pageInfo;
        // this.getCharacterId(this.characterName, 8, pageInfo.offset)
        this.getBooks(pageInfo.offset);
    }

    getBooks(offset: number): void {
        
         this._booksService.getBooks(this.characterId, offset)
            .subscribe( books => this.matchingBooksResponse = books,
                        error => this.errorMessage = <any>error,
                        () => {
                            this.matchingBooks = this.matchingBooksResponse.data.results;
                            console.log('end result :' , this.matchingBooksResponse);
                            this.totalResultCount = this.matchingBooksResponse.data.total;
                        }
                    ) 
    }

    ngOnInit(): void {

       this.getBooks(0);

    }

}
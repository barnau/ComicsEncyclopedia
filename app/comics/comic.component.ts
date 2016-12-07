import { Component, Input, OnInit } from '@angular/core';
import { IApiResponse } from './interfaces/api-response';
import { ICharacterResult } from './interfaces/api-character-result';
import { ComicService } from './comic.service'
import { IPageInfo } from './interfaces/page-info';





@Component({
    moduleId: module.id,
    styleUrls: ['./comic.component.css'],
    templateUrl: './comic.component.html'
})
export class ComicComponent  {
   
   
    matchingCharacterResponse: IApiResponse;
    errorMessage: string;
    matchingCharacters: ICharacterResult[];
    characterName: string;
    totalResultCount: number;
    currentPage: IPageInfo;
    

    onPageClicked(pageInfo: IPageInfo, characterName: string) {
        console.log(pageInfo);
        this.currentPage = pageInfo;
        this.getCharacterId(this.characterName, 8, pageInfo.offset)
    }
    
    

    getCharacterId(characterName: string, numResults: number, offset: number): void {
        this.errorMessage = undefined;
        this.characterName = this.characterName === undefined ? characterName : this.characterName;
        offset = offset === undefined ? 0 : offset;
        numResults = numResults === undefined ? 8 : numResults;
        
         this._comicService.getCharacters(characterName, numResults, offset)
            .subscribe( characters => this.matchingCharacterResponse = characters,
                        error => this.errorMessage = <any>error,
                        () => { 
                            this.matchingCharacters = this.matchingCharacterResponse.data.results
                            console.log(this.matchingCharacters)
                            this.totalResultCount = this.matchingCharacterResponse.data.total;
                            if(this.totalResultCount < 1) {
                                this.errorMessage = 'Sorry, Couldn\'t find any results for "' + this.characterName +'".';
                            }
                            console.log(this.totalResultCount);
                     }
            );
    }
    constructor(private _comicService: ComicService) {}


   
   

    

    
}
import { Component, Input, OnInit } from '@angular/core';
import { IApiResponse } from './interfaces/api-response';
import { ICharacterResult } from './interfaces/api-character-result';
import { ComicService } from './comic.service'





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
    

    getCharacterId(characterName: string): void {
         this._comicService.getCharacters(characterName)
            .subscribe( characters => this.matchingCharacterResponse = characters,
                        error => this.errorMessage = <any>error,
                        () => { 
                            this.matchingCharacters = this.matchingCharacterResponse.data.results
                            console.log(this.matchingCharacters) }
            );
    }
    constructor(private _comicService: ComicService) {}

//     ngOnInit(): void {
//         // this._comicService.getComics()
//         //     .subscribe( comics => this.comics = comics,
//         //                 error => this.errorMessage = <any>error,
//         //                 () => console.log(this.comics)
//         //     );

       
//     }

// @Input() comic1: Comic;
   
   

    

    
}
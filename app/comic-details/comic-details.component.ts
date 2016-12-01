import { Component, OnInit } from '@angular/core';
import { ICharacterResult } from '../comics/interfaces/api-character-result';
import { ComicService } from '../comics/comic.service';
import { IApiResponse } from '../comics/interfaces/api-response';
import { ActivatedRoute, Router } from '@angular/router';

class DisplayCharacter {
    id: number;
    name
}


@Component({
    moduleId: module.id,
    templateUrl: './comic-details.component.html',
    styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {

    character: ICharacterResult;
    matchingCharacter: ICharacterResult[];
    matchingCharacterResponse: IApiResponse;
    errorMessage: string;

    constructor(private _route: ActivatedRoute, private _router: Router, private _comicService: ComicService) {}
   
  ngOnInit(): void {
      let id = +this._route.snapshot.params['id'];
      this._comicService.getCharacterById(id)
      .subscribe(character => this.character = character.data.results[0], 
                error => this.errorMessage = <any>error,
                () => {
                    
                    console.log('Character', this.character);
                }
      )
      
      
  }
}
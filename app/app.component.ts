import { Component } from '@angular/core';
import  { ComicService } from './comics/comic.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [ ComicService ]
  
})
export class AppComponent { }

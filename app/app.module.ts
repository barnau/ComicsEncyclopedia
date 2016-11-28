import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {AppComponent } from './app.component';
import { ComicComponent } from './comics/comic.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule,
                  FormsModule,
                  RouterModule.forRoot([
                   { path: 'comicSearch', component: ComicComponent },
                   { path: 'comicDetails', component: ComicDetailsComponent },
                   { path: '', redirectTo: 'comicSearch', pathMatch: 'full' },
                  { path: '**', redirectTo: 'comicSearch', pathMatch: 'full' }
                  ], {useHash: true})
                   ],
  declarations: [
    AppComponent,
    ComicComponent,
    ComicDetailsComponent
    
  ],
  bootstrap:    [AppComponent]
})
export class AppModule { }

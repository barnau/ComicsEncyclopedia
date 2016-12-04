import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {AppComponent } from './app.component';
import { ComicComponent } from './comics/comic.component';
import { PaginationComponent } from './shared/pagination.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule,
                  FormsModule,
                  RouterModule.forRoot([
                   { path: 'home', component: HomeComponent},
                   { path: 'comicSearch', component: ComicComponent },
                   { path: 'comicDetails/:id', component: ComicDetailsComponent },
                   { path: '', redirectTo: 'home', pathMatch: 'full' },
                  { path: '**', redirectTo: 'comicSearch', pathMatch: 'full' }
                  ], {useHash: true})
                   ],
  declarations: [
    AppComponent,
    ComicComponent,
    PaginationComponent,
    ComicDetailsComponent,
    HomeComponent
    
  ],
  bootstrap:    [AppComponent]
})
export class AppModule { }

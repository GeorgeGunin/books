import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DeleteComponent } from './components/delete/delete.component';
import { BooksService } from './services/books.service';
import { EditComponent } from './components/edit/edit.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BooksComponent,
    AddBookComponent,

    PageNotFoundComponent,
    DeleteComponent,
    EditComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule,

  ],


  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

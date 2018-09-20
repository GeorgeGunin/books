import { Component, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books: any[];
  id: string;
  constructor(public bs: BooksService) {

  }

  ngOnInit() {

    this.bs.getBooks().subscribe(books => this.books = books);
    this.bs.currentId.subscribe(id => this.id = id);
  }



}


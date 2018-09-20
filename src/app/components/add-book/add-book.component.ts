import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Book } from '../../model/Book';
import * as $ from 'jquery';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers: [BooksService]
})
export class AddBookComponent implements OnInit {

  @Input() books: any[];



  book: Book = {
    id: '',
    bookTitle: "",
    authorName: "",
    publishedDate: ''
  };



  constructor(

    private fms: FlashMessagesService,


  ) { }

  taken: boolean;

  ngOnInit() {


  }

  onAddBookbtn(form) {

    var index = this.books.length;
    this.book.id = (index).toString();
    this.book.authorName = form.value.bookauthor;
    var title = this.validateTitle(form.value.booktitle)
    this.book.publishedDate = (form.value.pbook);
    this.book.bookTitle = title;
    this.books.push(this.book);
    this.fms.show('Book saved', { cssClass: 'alert-success mb-5', timeout: 4000 });
    $('.add-btn').attr({ disabled: true });

  }

  validateTitle(title) {
    return title.replace(/^[^a-zA-Z\d:]+|[^a-zA-Z\d:]+$/gm, '');
  }

  checkTitle({ value }) {
    this.taken = false;
    this.books.forEach((book) => {
      if (this.book.id != book.id && value == book.bookTitle) {
        this.taken = true;
      }

    });
  }


}

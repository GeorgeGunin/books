import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../services/books.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  //input parameter books from parent(from app.component.ts)
  @Input() books: any[];

  public book

  constructor(private bs: BooksService) {

  }

  ngOnInit() {


  }

  //reset form fields
  clearFields() {
    $('#addBookForm').find("input[type=text], textarea").val("");
  }

  //select book
  selectBook(id) {
    this.bs.setId(id);
    this.bs.setBook(this.books[id]);

  }





}

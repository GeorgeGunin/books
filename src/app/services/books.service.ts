import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import * as $ from 'jquery';


@Injectable()

export class BooksService {

  private idSource = new BehaviorSubject('');
  currentId = this.idSource.asObservable();

  private bookSource = new BehaviorSubject({});
  currentBook = this.bookSource.asObservable();

  constructor(private http: Http) {

  }

  getBooks() {
    return this.http.get('assets/js/books.json').pipe(map(res => res.json()));
  }

  setId(id: string) {
    this.idSource.next(id)
  }

  setBook(book: any) {
    this.bookSource.next(book);
  }



}

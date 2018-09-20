import { Component, OnInit, Input } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() id: string; @Input() books: any[];
  constructor(private fms: FlashMessagesService) { }

  ngOnInit() {

  }

  deleteBook(id) {

    this.books.forEach((book) => {
      if (book.id == id) {
        this.books.splice(this.books.indexOf(book), 1);
        this.fms.show('Book removed', { cssClass: 'alert-success mb-5', timeout: 4000 });
      }
    })

  }

}

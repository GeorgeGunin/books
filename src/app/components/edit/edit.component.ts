import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    @Input() id: string;
    @Input() books: any[];

    book: any;
    taken: boolean = false;
    title: string;

    constructor(private bs: BooksService, private fms: FlashMessagesService) {

    }



    ngOnInit() {

        this.bs.currentBook.subscribe(book => this.book = book);
        this.taken = false;
    }

    // replace before and after all non text and non numeric symbols to empty string
    validateTitle(title) {
        return title.replace(/^[^a-zA-Z\d:]+|[^a-zA-Z\d:]+$/gm, '');
    }

    onEditBookbtn({ value, valid }) {

        if (!valid) {
            this.fms.show('Please fill all fields in right way', { cssClass: 'alert-danger mb-5', timeout: 4000 });
            return
        }
        value.booktitle = this.validateTitle(value.booktitle);

        this.book.bookTitle = value.booktitle;
        this.book.publishedDate = value.pbook;
        this.book.authorName = value.bookauthor;

        this.fms.show('Book saved', { cssClass: 'alert-success mb-5', timeout: 4000 });


    }

    isTakenTitle({ value }) {
        this.taken = false;
        this.books.forEach((book) => {
            if (this.book.id != book.id && value == book.bookTitle) {
                this.taken = true;
            }

        });

    }
}

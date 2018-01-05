import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  booksList: Book[] = [];

  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookStoreService
      .getBooks()
      .subscribe(response => this.booksList = response);
  }

  deleteBook(id: number) {
    this.booksList = this.booksList
                    .filter(book => book.id !== id);
    this.bookStoreService.deleteBook(id)
      .subscribe(result => this.getBooks());

  }

}

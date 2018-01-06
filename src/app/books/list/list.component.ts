import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookStoreService } from '../book-store.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  booksList: Book[] = [];
  spinnerVisibility = 'block';

  constructor(private bookStoreService: BookStoreService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookStoreService
      .getBooks()
      .subscribe(response => {
        this.booksList = response;
        this.spinnerVisibility = 'none';
      });
  }

  deleteBook(id: number) {
    this.booksList = this.booksList.filter(book => book.id !== id);
    this.bookStoreService.deleteBook(id)
      .subscribe(result => {
        if (result.ok) {
          this.openSnackBar();
        } else {
          this.deniedSnackBar();
        }
        this.getBooks();
      });
  }

  openSnackBar() {
    this.snackBar.open('Book Deleted', 'CLOSE', {
      duration: 1000
    });
  }

  deniedSnackBar() {
    this.snackBar.open('Failed to connect to server', 'CLOSE', {
      duration: 1000
    });
  }

}

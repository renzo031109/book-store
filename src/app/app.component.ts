import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BookStoreService } from './books';
import { AddBookDialogComponent } from './books/add-book-dialog/add-book-dialog.component';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [{
    name: 'Books'
  }];

  constructor(private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private bookStoreService: BookStoreService){}

      openAddBookDialog() {
      this.dialog.open(AddBookDialogComponent)
        .afterClosed()
        .filter(book => !!book)
        .switchMap(book => this.bookStoreService.addBook(book))
        .subscribe(result => {
          if (result.ok) {
            this.openSnackBar();
          }
        });
    }

    openSnackBar() {
      this.snackBar.open('Book Added', 'CLOSE', {
        duration: 1000
      });
    }

}

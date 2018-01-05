import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  booksList: Book[] = [];
  selectedBook: Book;
  constructor(private bookStoreService: BookStoreService) {
  }
  
  ngOnInit() {
    this.bookStoreService
      .getBooks()
      .subscribe(response => this.booksList = response);
  }
}

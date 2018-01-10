import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BookStoreService } from './books';
import { BooksContainerComponent } from './books/books-container.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app-material.module';

import { MasterDetailComponent } from './books/master-detail/master-detail.component';
import { ListComponent } from './books/list/list.component';
import { AddBookDialogComponent } from './books/add-book-dialog/add-book-dialog.component';
import { UserRegistrationComponent } from './books/user-registration/user-registration.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BooksContainerComponent },
  {path: 'registration', component: UserRegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MasterDetailComponent,
    ListComponent,
    AddBookDialogComponent,
    UserRegistrationComponent,
    BooksContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent],
  entryComponents:[AddBookDialogComponent]
})
export class AppModule {
}

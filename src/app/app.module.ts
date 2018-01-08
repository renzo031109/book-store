import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BookStoreService } from './books';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app-material.module';

import { MasterDetailComponent } from './books/master-detail/master-detail.component';
import { ListComponent } from './books/list/list.component';
import { AddBookDialogComponent } from './books/add-book-dialog/add-book-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterDetailComponent,
    ListComponent,
    AddBookDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    FormsModule
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent],
  entryComponents:[AddBookDialogComponent]
})
export class AppModule {
}

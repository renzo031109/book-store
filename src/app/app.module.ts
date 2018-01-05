import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Safe } from './safe';

import { BookStoreService } from './books';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app-material.module';

import { MasterDetailComponent } from './books/master-detail/master-detail.component';
import { ListComponent } from './books/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    Safe,
    MasterDetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

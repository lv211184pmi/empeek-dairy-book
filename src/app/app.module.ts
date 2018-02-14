
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CommentsComponent } from './comments/comments.component';
import { StorageService } from './services/storage.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

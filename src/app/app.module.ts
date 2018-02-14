import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

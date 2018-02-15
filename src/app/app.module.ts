
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CommentsComponent } from './comments/comments.component';
import { StorageService } from './services/storage.service';
import { CommunicationService } from './services/communication.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StorageService,
    CommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

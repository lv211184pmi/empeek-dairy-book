import { Component, 
         OnInit, 
         EventEmitter, 
         Output} from '@angular/core';

import { StorageService } from './../services/storage.service';
import { DairyEvent } from '../dairyEvent.model';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  index: number = 1;
  dairyEvents: DairyEvent[] = [];
  @Output() commentSelected = new EventEmitter<DairyEvent>();

  constructor(private serviceLS: StorageService) { }

  getItems(){
    let items = this.serviceLS.getData();
    this.dairyEvents = JSON.parse(items);
    if(!this.dairyEvents) {
      this.dairyEvents = [];
    }     
  }

  addItem(item: HTMLInputElement) {
    let dairyEvent = new DairyEvent(this.index, item.value, []);
    this.dairyEvents.push(dairyEvent);
    this.serviceLS.setItem(this.dairyEvents);
    item.value='';
    this.index++;
  }

  deleteItem(item) {
    let index = this.dairyEvents.indexOf(item);
    this.dairyEvents.splice(index, 1);
    this.serviceLS.setItem(this.dairyEvents);
    item = '';
    this.commentSelected.emit(item);
  }

  showComment(item: DairyEvent) {
    this.commentSelected.emit(item);
  }

  ngOnInit() {
    this.getItems();
  }
}

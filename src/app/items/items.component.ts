import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { DairyEvent } from '../shared/dairyEvent.model';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  dairyEvents: DairyEvent[] = [];
  @Output() commentSelected = new EventEmitter<DairyEvent>();

  constructor(private comunication: CommunicationService) {
    this.comunication.eventsArrUpdated.subscribe(
      (events: DairyEvent[]) => {
        this.dairyEvents = events;
      }
    )
  }

  addItem(item: HTMLInputElement) {
    if(item.value){
      this.comunication.createItem(item);
      this.comunication.getItems();
      item.value='';
    }
  }

  deleteItem(item) {
    this.comunication.deleteItem(item);
    item = '';
    this.commentSelected.emit(item);  
  }

  showComment(item: DairyEvent) {
    this.commentSelected.emit(item);
    this.activateItem(item);
  }

  activateItem(item: DairyEvent) {
    let status =  this.dairyEvents.map((element) => {
      if(element.active){
        return element.active = !element.active;
      } else {
        return element.active = false;
      }
    });
    return item.active = true;
  }

  getIndex(item: DairyEvent) {
    return this.dairyEvents.indexOf(item);
  }

  ngOnInit() {
    this.comunication.getItems();
  }
}

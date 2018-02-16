import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { DairyEvent } from '../dairyEvent.model';
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
    this.comunication.createItem(item);
    this.comunication.getItems();
    item.value='';
  }

  deleteItem(item) {
    this.comunication.deleteItem(item);
    item = '';
    this.commentSelected.emit(item);  
  }

  showComment(item: DairyEvent) {
    this.commentSelected.emit(item);
  }

  ngOnInit() {
    this.comunication.getItems();
  }
}

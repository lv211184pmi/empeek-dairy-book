import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  dairyEvents: any[] = [];

  constructor(private service: StorageService) { }

  getItems(){
    let items = this.service.getData();
    this.dairyEvents = JSON.parse(items);
    if(!this.dairyEvents) {
      this.dairyEvents = [];
    }     
  }

  addItem(item: HTMLInputElement) {
    let dairyEvent = { title: item.value, comments: []};
    this.dairyEvents.splice(0, 0, dairyEvent);
    this.service.setItem(this.dairyEvents);
    item.value='';
  }

  deleteItem(item) {
    let index = this.dairyEvents.indexOf(item);
    this.dairyEvents.splice(index, 1);
    this.service.setItem(this.dairyEvents);
  }

  ngOnInit() {
    this.getItems();
  }
}

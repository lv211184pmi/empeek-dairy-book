import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  dairyEvents: any[] = [];
  constructor() { }

  addItem(item: HTMLInputElement) {
    let dairyEvent = { title: item.value}
    console.log(item.value);
    this.dairyEvents.splice(0, 0, dairyEvent);
    item.value='';
  }

  ngOnInit() {
  }

}

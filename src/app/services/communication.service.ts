import { Injectable, EventEmitter } from "@angular/core";

import { StorageService } from "./storage.service";
import { DairyEvent } from "../dairyEvent.model";

@Injectable()
export class CommunicationService {
    index: number = 1;
    dairyEvents: DairyEvent[] = [];
    eventsArrUpdated = new EventEmitter<DairyEvent[]>();

    constructor(private serviceLS: StorageService){}

    getItems(){
        let items = this.serviceLS.getData();
        this.dairyEvents = JSON.parse(items);
        if(!this.dairyEvents) {
            this.dairyEvents = [];
        }
        this.eventsArrUpdated.emit(this.dairyEvents);
    }

    createItem(item: HTMLInputElement) {
        let dairyEvent = new DairyEvent(this.index, item.value, []);
        this.dairyEvents.push(dairyEvent);
        this.serviceLS.setItem(this.dairyEvents);
        this.index++;
    }

    deleteItem(item) {
        let index = this.dairyEvents.indexOf(item);
        this.dairyEvents.splice(index, 1);
        this.serviceLS.setItem(this.dairyEvents);
    }

    updateItem(event: DairyEvent) {
        let index = this.dairyEvents.indexOf(event);
        this.dairyEvents[index].comments = event.comments;
        this.serviceLS.setItem(this.dairyEvents);
    }
}
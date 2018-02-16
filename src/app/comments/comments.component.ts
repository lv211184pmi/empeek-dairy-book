import { DairyEvent } from '../shared/dairyEvent.model';
import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() dairyEvent: DairyEvent;
  
  constructor(private communication: CommunicationService) { }

  addComment(comment: HTMLInputElement) {
    this.dairyEvent.comments.push(comment.value);
    this.communication.updateItem(this.dairyEvent);
    comment.value = '';
  }

  ngOnInit() {
    console.log(this.dairyEvent);
  }
}
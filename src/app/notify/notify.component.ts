import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../services/notify.service';
import { Message } from '../models/message';


@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  message: Message;

  constructor(private readonly notifyService: NotifyService) {
    this.notifyService.newMessageReceived.subscribe((message: Message) => this.newMessageReceived(message));
  }

  ngOnInit() {
  }

  newMessageReceived(newMessage: Message) {
    this.message = newMessage;
    setTimeout(() => this.message = undefined, this.message.time ? this.message.time * 1000 : 2000 );
  }

}

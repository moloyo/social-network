import { Injectable, EventEmitter } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  public newMessageReceived: EventEmitter<Message>;

  constructor() {
    this.newMessageReceived = new EventEmitter();
  }

  notify (detail: string, type: string, time?: number) {
    const message = new Message(detail, type, time);
    this.newMessageReceived.emit(message);
  }
}

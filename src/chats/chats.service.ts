import { Injectable } from '@nestjs/common';
import {
  EventType,
  Message,
  MessagePayload,
  MessageType,
  User,
  WebSocketEvent,
} from './chats.interface';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ChatsService {
  private messages: Message[] = [];

  private subject = new Subject<WebSocketEvent>();

  addEvent(name: string, data?: any): void {
    this.subject.next({ name, data });
  }

  getEventSubject$(): Observable<WebSocketEvent> {
    return this.subject.asObservable();
  }

  joinChat(user: User) {
    this.createNotificationMessage(user, 'joined the chat');
    this.addEvent(EventType.MESSAGE_RETRIEVED, this.getMessages());

    return;
  }

  addMessage(messagePayload: MessagePayload) {
    const message = {
      ...messagePayload,
      id: this.generateRandomId(),
      createdAt: new Date().toISOString(),
      type: MessageType.CHAT,
    };

    this.messages.push(message);

    this.addEvent(EventType.MESSAGE_CREATED, message);
  }

  getMessages() {
    return this.messages;
  }

  private createNotificationMessage(user: User, content: string) {
    this.messages.push({
      id: this.generateRandomId(),
      content,
      user,
      createdAt: new Date().toISOString(),
      type: MessageType.NOTIFICATION,
    });
  }

  private generateRandomId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}

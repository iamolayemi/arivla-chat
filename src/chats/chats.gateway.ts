import { Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatsService } from './chats.service';
import { Server, Socket } from 'socket.io';
import { MessagePayload, User } from './chats.interface';
import { Subscription } from 'rxjs';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  private eventSubscription: Subscription;

  private readonly logger: Logger = new Logger(ChatsGateway.name);

  constructor(private readonly chatsService: ChatsService) {}

  afterInit(server: Server): void {
    this.eventSubscription = this.chatsService.getEventSubject$().subscribe({
      next: ({ name, data }) => server.emit(name, data),
      error: (err) => server.emit('error', err),
    });
  }

  async handleConnection() {
    this.logger.log('Websocket connection established successfully');
  }

  @SubscribeMessage('join')
  async handleJoin(@MessageBody() user: User) {
    this.chatsService.joinChat(user);
  }

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() messagePayload: MessagePayload) {
    this.chatsService.addMessage(messagePayload);
  }

  handleDisconnect(socket: Socket) {
    socket.disconnect();
  }
}

export enum EventType {
  USER_JOINED = 'user_joined',
  MESSAGE_CREATED = 'message_created',
  MESSAGE_RETRIEVED = 'message_retrieved',
  ERROR = 'error',
}

export enum MessageType {
  CHAT = 'chat',
  NOTIFICATION = 'notification',
}

export interface WebSocketEvent {
  name: string;
  data?: any;
}

export interface User {
  id: string;
  name: string;
}

export interface Message {
  id: string;
  content: string;
  type: MessageType;
  user: User;
  createdAt: string;
}

export interface MessagePayload {
  content: string;
  user: User;
}

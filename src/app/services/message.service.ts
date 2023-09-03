import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messagesArray: string[] = [];

  add(message: string): void {
    this.messagesArray.push(message);
  }

  clear(): void {
    this.messagesArray = [];
  }
}

import { Component, inject } from '@angular/core';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  public messageService = inject(MessageService);
}

// src/app/chat/chat.component.ts
import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: string[] = [];
  newMessage: string = '';

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    // Escucha los mensajes desde el servidor
    this.socketService.onNewMessage((message: string) => {
      this.messages.push(message);
    });
  }

  // Envía un nuevo mensaje
  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.socketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}

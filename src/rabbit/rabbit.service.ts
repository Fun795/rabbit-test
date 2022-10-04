import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateNoteDto } from '../notes/dto/create-note.dto';

@Injectable()
export class RabbitService {
  constructor(@Inject('TEST_SERVICE') private client: ClientProxy) {}

  noteCreated(note: CreateNoteDto) {
    this.client.emit('note-created', note);
  }
}

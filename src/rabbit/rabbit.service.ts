import { Injectable } from '@nestjs/common';
import amqp = require('amqplib/callback_api');
import { NoteEntity } from '../notes/entities/note.entity';
@Injectable()
export class RabbitService {
  sendMessage(createdNote: NoteEntity) {
    amqp.connect('amqp://localhost', function (error0, connection) {
      if (error0) {
        throw error0;
      }
      connection.createChannel(function (error1, channel) {
        if (error1) {
          throw error1;
        }
        const queue = 'notes';
        const msg = JSON.stringify(createdNote);

        channel.assertQueue(queue, {
          durable: false,
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(' [x] Sent %s', msg);
      });
    });
  }
}

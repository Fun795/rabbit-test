import { Inject, Injectable } from '@nestjs/common';
import amqp = require('amqplib/callback_api');
import { NoteEntity } from '../notes/entities/note.entity';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitService {
  constructor(@Inject('TEST_SERVICE') private client: ClientProxy) {
    // console.log(123213213);
  }

  async getHello() {
    console.log('getHello sended');
    return this.client.send({ cmd: 'greeting' }, 'Progressive Coder');
  }

  async getHelloAsync() {
    const message = await this.client.send(
      { cmd: 'greeting-async' },
      'Progressive Coder',
    );
    return message;
  }

  async publishEvent() {
    this.client.emit('book-created', {
      bookName: 'The Way Of Kings',
      author: 'Brandon Sanderson',
    });
  }

  // sendMessage(createdNote: NoteEntity) {
  //   amqp.connect('amqp://localhost', function (error0, connection) {
  //     if (error0) {
  //       throw error0;
  //     }
  //     connection.createChannel(function (error1, channel) {
  //       if (error1) {
  //         throw error1;
  //       }
  //       const queue = 'notes';
  //       const msg = JSON.stringify(createdNote);
  //
  //       channel.assertQueue(queue, {
  //         durable: false,
  //       });
  //
  //       channel.sendToQueue(queue, Buffer.from(msg));
  //       console.log(' [x] Sent %s', msg);
  //     });
  //   });
  // }
}

import { Module } from '@nestjs/common';
import { RabbitController } from './rabbit.controller';
import { RabbitService } from './rabbit.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'TEST_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqp://localhost:5672'],
    //       queue: 'notes5',
    //       queueOptions: {
    //         durable: false,
    //       },
    //     },
    //   },
    // ]),
  ],
  controllers: [RabbitController],
  providers: [RabbitService],
  exports: [RabbitService],
})
export class RabbitModule {}

import { Module } from '@nestjs/common';
import { RabbitController } from './rabbit.controller';
import { RabbitService } from './rabbit.service';

@Module({
  controllers: [RabbitController],
  providers: [RabbitService],
  exports: [RabbitService]
})
export class RabbitModule {}

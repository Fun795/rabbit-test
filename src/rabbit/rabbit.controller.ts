import { Controller } from '@nestjs/common';
import { RabbitService } from './rabbit.service';

@Controller('rabbit')
export class RabbitController {
  constructor(private readonly rabbitService: RabbitService) {}
}

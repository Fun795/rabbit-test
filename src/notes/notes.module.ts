import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from './entities/note.entity';
import { RabbitModule } from '../rabbit/rabbit.module';

@Module({
  imports: [TypeOrmModule.forFeature([NoteEntity]), RabbitModule],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}

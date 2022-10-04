import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from './entities/note.entity';
import { RabbitService } from '../rabbit/rabbit.service';

@Module({
  imports: [TypeOrmModule.forFeature([NoteEntity]), RabbitService],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}

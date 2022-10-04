import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from './notes/entities/note.entity';

@Module({
  imports: [
    NotesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'testDb',
      entities: [NoteEntity],
      synchronize: true,
    }),
  ],
})
export class AppModule {}

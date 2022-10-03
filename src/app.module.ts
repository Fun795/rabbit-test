import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { RabbitModule } from './rabbit/rabbit.module';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { NoteEntity } from './notes/entities/note.entity';

@Module({
  imports: [
    RabbitModule,
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
  // controllers: [AppController, PostsController],
  // providers: [AppService],
})
export class AppModule {
  private dataSource: DataSource;
}

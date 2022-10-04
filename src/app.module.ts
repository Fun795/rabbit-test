import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { RabbitModule } from './rabbit/rabbit.module';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { NoteEntity } from './notes/entities/note.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NotesService } from './notes/notes.service';
import { NotesController } from './notes/notes.controller';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEST_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'notes5',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
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
  controllers: [AppController, PostsController, NotesController],
  providers: [AppService, NotesService],
})
export class AppModule {
  private dataSource: DataSource;
}

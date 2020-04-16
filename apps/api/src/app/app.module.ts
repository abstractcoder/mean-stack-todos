import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoSchema } from './todo.schema';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'todos'),
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todos'),
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

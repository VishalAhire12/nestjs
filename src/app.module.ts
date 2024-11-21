import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import{TypeOrmModule} from '@nestjs/typeorm';
import {join} from  'path'
import { UserModule } from './user/user.module';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mongodb',
      host: 'localhost',
      port :27017,
      database: 'data1',
     useNewUrlParser:true,
autoLoadEntities:true,
useUnifiedTopology:true,
entities:[join(__dirname,'**/**.entity{.ts,.js}')],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

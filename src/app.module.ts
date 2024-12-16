import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://firasmzoughi2001:firas2001@cluster0.6la3o.mongodb.net/myDatabaseName?retryWrites=true&w=majority&appName=Cluster0',
    ),
    AuthModule,
  ],
})
export class AppModule {}

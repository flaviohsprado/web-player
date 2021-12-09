import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './domain/modules/auth/auth.module';
import { UserModule } from './domain/modules/user/user.module';
import { DatabaseModule } from './data/connection/database.module';
import { FileModule } from './domain/modules/file/file.module';
import { AuthMiddleware } from './main/middlewares/auth.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicModule } from './domain/modules/music/music.module';
@Module({
  imports: [DatabaseModule, FileModule, UserModule, AuthModule, MusicModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('private/users');
  }
}

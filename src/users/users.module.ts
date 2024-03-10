import { Module } from '@nestjs/common';
import { UsersController } from './adapters/api/users.controller';
import { UsersService } from './core/services/users.service';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [NotificationsModule],
  controllers: [UsersController],
  providers: [
    {
      provide: 'UsersPort',
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}

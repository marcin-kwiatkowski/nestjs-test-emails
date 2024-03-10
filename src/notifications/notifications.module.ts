import { Module } from '@nestjs/common';
import { NotificationsGateway } from './adapters/notifications.gateway';
import { NotificationsService } from './core/services/notifications.service';
import { EmailNotificationsRepository } from './adapters/repositories/email-notifications.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'NotificationsPort',
      useClass: NotificationsService,
    },
    {
      provide: 'NotificationsRepositoryPort',
      useClass: EmailNotificationsRepository,
    },
    NotificationsGateway,
  ],
  exports: [NotificationsGateway],
})
export class NotificationsModule {}

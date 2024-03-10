import { NotificationEntity } from '../entities/notification.entity';
import { NotificationsPort } from '../ports/notifications.port';
import { Inject, Injectable } from '@nestjs/common';
import { NotificationsRepositoryPort } from '../ports/notifications.repository.port';

@Injectable()
export class NotificationsService implements NotificationsPort {
  constructor(
    @Inject('NotificationsRepositoryPort')
    private readonly notificationsRepository: NotificationsRepositoryPort,
  ) {}

  send(notification: NotificationEntity): void {
    return this.notificationsRepository.send(notification);
  }
}

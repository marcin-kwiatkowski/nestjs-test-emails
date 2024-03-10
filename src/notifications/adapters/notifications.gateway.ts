import { Inject, Injectable } from '@nestjs/common';
import { NotificationsPort } from '../core/ports/notifications.port';
import { NotificationEntity } from '../core/entities/notification.entity';

@Injectable()
export class NotificationsGateway {
  constructor(
    @Inject('NotificationsPort')
    private readonly notificationsService: NotificationsPort,
  ) {}

  sendNotification(recipient: string, content: string) {
    const notification: NotificationEntity = {
      recipient,
      content,
    };
    this.notificationsService.send(notification);
  }
}

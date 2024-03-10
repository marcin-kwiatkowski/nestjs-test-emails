import { NotificationEntity } from 'src/notifications/core/entities/notification.entity';
import { NotificationsRepositoryPort } from '../../core/ports/notifications.repository.port';

export class InMemoryNotificationsRepository
  implements NotificationsRepositoryPort
{
  private sentNotifications: NotificationEntity[] = [];

  send(notification: NotificationEntity): void {
    this.sentNotifications.push(notification);
  }

  getSentNotifications(): NotificationEntity[] {
    return this.sentNotifications;
  }
}

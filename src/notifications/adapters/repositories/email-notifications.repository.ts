import { NotificationEntity } from 'src/notifications/core/entities/notification.entity';
import { NotificationsRepositoryPort } from '../../core/ports/notifications.repository.port';

export class EmailNotificationsRepository
  implements NotificationsRepositoryPort
{
  send(notification: NotificationEntity): void {
    console.log(`Sending email to ${notification.recipient}`);
  }
}

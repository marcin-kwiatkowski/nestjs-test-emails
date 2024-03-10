import { NotificationEntity } from '../entities/notification.entity';

export interface NotificationsRepositoryPort {
  send(notification: NotificationEntity): void;
}

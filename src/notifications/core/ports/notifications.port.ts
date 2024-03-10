import { NotificationEntity } from '../entities/notification.entity';

export interface NotificationsPort {
  send(notification: NotificationEntity): void;
}

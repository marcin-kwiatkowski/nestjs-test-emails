import { UsersPort } from '../ports/users.port';
import { User } from '../entities/user.entity';
import { v4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { NotificationsGateway } from '../../../notifications/adapters/notifications.gateway';

@Injectable()
export class UsersService implements UsersPort {
  constructor(private readonly notificationsGateway: NotificationsGateway) {}

  createUser(login: string, email: string): User {
    // Here you can create a user
    const user: User = {
      id: v4(),
      login,
      email,
    };

    this.notificationsGateway.sendNotification(
      email,
      'Your account has been created.',
    );

    return user;
  }
}

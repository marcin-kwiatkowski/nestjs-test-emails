import { UsersPort } from '../ports/users.port';
import { User } from '../entities/user.entity';
import { v4 } from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService implements UsersPort {
  createUser(login: string, email: string): User {
    // Here you can create a user
    const user: User = {
      id: v4(),
      login,
      email,
    };

    // TODO: Send notification to the user

    return user;
  }
}

import { User } from '../entities/user.entity';

export interface UsersPort {
  createUser(login: string, email: string): User;
}

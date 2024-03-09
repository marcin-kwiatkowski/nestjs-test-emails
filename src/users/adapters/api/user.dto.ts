import { User } from '../../core/entities/user.entity';

export class UserDTO {
  readonly id: string;
  readonly login: string;
  readonly email: string;

  constructor(id: string, login: string, email: string) {
    this.id = id;
    this.login = login;
    this.email = email;
  }

  public static fromEntity(user: User): UserDTO {
    return new UserDTO(user.id, user.login, user.email);
  }
}

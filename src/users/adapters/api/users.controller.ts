import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { UserDTO } from './user.dto';
import { UsersPort } from '../../core/ports/users.port';

@Controller('/users')
export class UsersController {
  constructor(@Inject('UsersPort') private readonly usersService: UsersPort) {}

  @Post()
  createUser(@Body() payload: CreateUserDTO): UserDTO {
    const user = this.usersService.createUser(payload.login, payload.email);
    return UserDTO.fromEntity(user);
  }
}

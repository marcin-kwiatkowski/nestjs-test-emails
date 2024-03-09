import { Module } from '@nestjs/common';
import { UsersController } from './adapters/api/users.controller';
import { UsersService } from './core/services/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    {
      provide: 'UsersPort',
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}

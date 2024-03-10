import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../app.module';
import { InMemoryNotificationsRepository } from '../../notifications/adapters/repositories/in-memory-notifications.repository';

describe('POST /users', () => {
  let app: INestApplication;
  let inMemoryNotificationsRepository: InMemoryNotificationsRepository;

  beforeEach(async () => {
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository();
    const appModule: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider('NotificationsRepositoryPort')
      .useValue(inMemoryNotificationsRepository)
      .compile();

    app = appModule.createNestApplication();
    await app.init();
  });

  it('response should contain the same email as it was in the payload', async () => {
    const email = 'user@example.com';
    const response = await request(app.getHttpServer())
      .post('/users')
      .send({ login: 'user', email });
    expect(response.status).toEqual(201);
    const userDTO = JSON.parse(response.text);
    expect(userDTO['email']).toEqual(email);
  });

  it('should send notifications to the email from the payload', async () => {
    const email = 'user@example.com';
    await request(app.getHttpServer())
      .post('/users')
      .send({ login: 'user', email });
    const notifications =
      inMemoryNotificationsRepository.getSentNotifications();
    expect(notifications).toHaveLength(1);
    expect(notifications[0].recipient).toEqual(email);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../app.module';

describe('POST /users', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const appModule: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

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
});

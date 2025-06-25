import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { AppService } from './app.service';

describe('AppModule', () => {
  let appModule: AppModule;

  beforeEach(async () => {

    const app: TestingModule = await Test.createTestingModule({
      providers: [AppModule],
    }).compile();

    appModule = app.get<AppModule>(AppModule);
  });

  describe('Probar el modulo raiz del proyecto', () => {
    test('Esto deberia retornar hola mundo en ingles"', () => {
      //expect(operaciones.operar()).toBe('Hello World!!');
    });
  });

});

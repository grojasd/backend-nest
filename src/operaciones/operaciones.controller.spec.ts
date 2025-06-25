import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesController } from './operaciones.controller';
import { OperacionesService } from './operaciones.service';

describe('AppController', () => {
  let operaciones: OperacionesController;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperacionesController],
      providers: [OperacionesService],
    }).compile();

    operaciones = module.get<OperacionesController>(OperacionesController);
  });

  describe('Probar el modulo raiz del proyecto', () => {
    test('Esto deberia retornar hola mundo en ingles"', () => {
      //expect(operaciones.operar()).toBe('Hello World!!');
    });
  });
});
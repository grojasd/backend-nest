import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  let service: OperacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperacionesService],
    }).compile();

    service = module.get<OperacionesService>(OperacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('operacion deberia sumar', () => {
    let a: any = 10;
    let b = 30;

    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = 50;
    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = -50;
    expect(service.operar('suma', a, b)).not.toBe(-100);

    a = Math.PI;
    b = 30;
    expect(service.operar('suma', a, b)).toBeCloseTo(33.14, 2);

    a = null;
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('suma', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('operacion deberia restar', () => {
    let a: any = 10;
    let b = 30;

    expect(service.operar('resta', a, b)).toBe(-20);

    a = -10;
    b = 50;
    expect(service.operar('resta', a, b)).toBe(-60);

    a = -10;
    b = -50;
    expect(service.operar('resta', a, b)).not.toBe(-100);

    a = Math.PI;
    b = 1;
    expect(service.operar('resta', a, b)).toBeCloseTo(2.14, 2);

    a = null;
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('resta', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('operacion deberia multiplicar', () => {
    let a: any = 10;
    let b = 30;

    expect(service.operar('multiplicacion', a, b)).toBe(300);

    a = -10;
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBe(-500);

    a = -10;
    b = -50;
    expect(service.operar('multiplicacion', a, b)).not.toBe(400);

    a = Math.PI;
    b = 1;
    expect(service.operar('multiplicacion', a, b)).toBeCloseTo(3.14, 2);

    a = null;
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('multiplicacion', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('operacion deberia dividir', () => {
    let a: any = 10;
    let b = 5;

    expect(service.operar('division', a, b)).toBe(2);

    a = -10;
    b = 2;
    expect(service.operar('division', a, b)).toBe(-5);

    a = -10;
    b = -2;
    expect(service.operar('division', a, b)).not.toBe(8);

    a = Math.PI;
    b = 2;
    expect(service.operar('division', a, b)).toBeCloseTo(1.57, 2);

    a = null;
    b = 50;
    expect(service.operar('division', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('division', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('division', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('operacion deberia obtener la potencia', () => {
    let a: any = 10;
    let b = 5;

    expect(service.operar('potencia', a, b)).toBe(100000);

    a = -10;
    b = 2;
    expect(service.operar('potencia', a, b)).toBe(100);

    a = -10;
    b = -2;
    expect(service.operar('potencia', a, b)).not.toBe(100);

    a = Math.PI;
    b = 2;
    expect(service.operar('potencia', a, b)).toBeCloseTo(9.8696, 4);

    a = null;
    b = 50;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('potencia', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('operacion deberia obtener el factorial', () => {
    let a: any = 5;
    expect(service.operar('factorial', a, a)).toBe(120);

    a = 5;
    expect(service.operar('factorial', a, a)).not.toBe(100);

    a = Math.PI;
    expect(service.operar('factorial', a, a)).toBeCloseTo(18.8495559, 7);

    a = null;
    expect(service.operar('factorial', a, a)).toBeNaN();

    a = '10';
    expect(service.operar('factorial', a, a)).toBeNaN();

    a = -10;
    expect(() => {
      service.operar('factorial', a, a);
    }).toThrow('Solo se puede obtener el factorial de números naturales.');

    a = undefined;
    expect(() => {
      service.operar('factorial', a, a);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });
});

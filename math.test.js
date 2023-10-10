const { suma, resta, multiplicacion, division} = require('./math.js');


describe('test de la funcion suma ', () => {

  test('la operacion  1 + 2 debe ser 3', () => {
    const res = suma(1,2);
    expect(res).toBe(3);
  });

  test('la operacion 4 + 21 debe ser 25', () => {
    const res = suma(4,21);
    expect(res).toBe(25);
  });

  test('la operacion 0 + 0 debe ser 0', () => {
    const res = suma(0,0);
    expect(res).toBe(0);
  });

});

describe('test de la funcion resta ', () => {

  test('la operacion  1 - 2 debe ser -1', () => {
    const res = resta(1,2);
    expect(res).toBe(-1);
  });

  test('la operacion 4 - 21 debe ser -17', () => {
    const res = resta(4,21);
    expect(res).toBe(-17);
  });

  test('la operacion 0 - 0 debe ser 0', () => {
    const res = resta(0,0);
    expect(res).toBe(0);
  });

});

describe('test de la funcion multiplicacion ', () => {

  test('la operacion  1 * 2 debe ser 2', () => {
    const res = multiplicacion(1,2);
    expect(res).toBe(2);
  });

  test('la operacion 4 * 21 debe ser 84', () => {
    const res = multiplicacion(4,21);
    expect(res).toBe(84);
  });

  test('la operacion 0 * 0 debe ser 0', () => {
    const res = multiplicacion(0,0);
    expect(res).toBe(0);
  });

});


describe('test de la funcion division ', () => {

  test('la operacion  1 / 2 debe ser 0.5', () => {
    const res = division(1,2);
    expect(res).toBe(0.5);
  });

  test('la operacion 4 / 21 debe ser 0.19', () => {
    const res = division(4,21);
    expect(res).toBe(0.19);
  });

  test('la operacion 0 / 0 debe ser NaN', () => {
    const res = division(0,0);
    expect(res).toBe("No se puede dividir por 0");
  });

});




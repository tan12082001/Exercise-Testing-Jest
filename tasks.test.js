const {
  stringLength, reverseString, capitalize, Calculator,
} = require('./tasks.js');

describe('String methods', () => {
  // test case one
  test('string with spaces, returns length', () => {
    // Arrange
    const stringtest = 'Tanmay i';

    // Act
    const stringcount = stringLength(stringtest);

    // Assert
    expect(stringcount).toBe(7);
  });

  // test case two
  test('string length', () => {
    // Arrange
    const stringtest = 'pipidi';

    // Act
    const stringcount = stringLength(stringtest);

    // Assert
    expect(stringcount).toBe(6);
  });

  test('string length, throw error', () => {
    // Arrange
    const stringtest = '';

    // Act
    // const stringcount = stringLength(stringtest);

    // Asset
    expect(() => stringLength(stringtest)).toThrow(Error);
  });

  // string reverse test
  test('String Reverse', () => {
    // Arrange
    const stringtest = 'Tanmayi';

    // Act
    const stringreverse = reverseString(stringtest);

    // Assert
    expect(stringreverse).toBe('iyamnaT');
  });

  // string 1st letter captial
  test('string to 1st letter capital string', () => {
    // Arrange
    const stringtest = 'tanmayi';

    // Act
    const stringcapital = capitalize(stringtest);

    // Assert
    expect(stringcapital).toBe('Tanmayi');
  });

  // if given string is not a string
  test('Not string, throw error', () => {
    // Arrange
    const stringtest = 22;

    // Act
    // const stringcount = stringLength(stringtest);

    // Asset
    expect(() => capitalize(stringtest)).toThrow(Error);
  });
});

// test cases for addition method
describe('Addition method', () => {
  test('add 4 and 2', () => {
    // Arrange
    const call = new Calculator(4, 2);

    // Act
    const result = call.add();

    // Assert
    expect(result).toBe(6);
  });

  test('add -1 and 4', () => {
    // Arrange
    const call = new Calculator(-1, 4);

    // Act
    const result = call.add();

    // Assert
    expect(result).toBe(3);
  });

  test('add 0 and 0', () => {
    // Arrange
    const call = new Calculator(0, 0);

    // Act
    const result = call.add();

    // Assert
    expect(result).toBe(0);
  });
});

// test cases for subtraction method
describe('subtract method', () => {
  test('sub 4 and 2', () => {
    // Arrange
    const call = new Calculator(4, 2);

    // Act
    const result = call.subtract();

    // Assert
    expect(result).toBe(2);
  });

  test('sub -1 and 4', () => {
    // Arrange
    const call = new Calculator(-1, 4);

    // Act
    const result = call.subtract();

    // Assert
    expect(result).toBe(-5);
  });

  test('sub 0 and 0', () => {
    // Arrange
    const call = new Calculator(0, 0);

    // Act
    const result = call.subtract();

    // Assert
    expect(result).toBe(0);
  });
});

// test cases for divide method.
describe('Divide method', () => {
  test('divide 4 and 2', () => {
    // Arrange
    const call = new Calculator(4, 2);

    // Act
    const result = call.divide();

    // Assert
    expect(result).toBe(2);
  });

  test('divide -1 and 4', () => {
    // Arrange
    const call = new Calculator(-1, 4);

    // Act
    const result = call.divide();

    // Assert
    expect(result).toBe(-0.25);
  });

  test('divide 0 and 0', () => {
    // Arrange
    const call = new Calculator(0, 0);

    // Act
    const result = call.divide();

    // Assert
    expect(result).toBe(NaN);
  });
});

// method to multiply numbers
describe('Multiply method', () => {
  test('multiply 4 and 2', () => {
    // Arrange
    const call = new Calculator(4, 2);

    // Act
    const result = call.multiply();

    // Assert
    expect(result).toBe(8);
  });

  test('multiply -1 and 4', () => {
    // Arrange
    const call = new Calculator(-1, 4);

    // Act
    const result = call.multiply();

    // Assert
    expect(result).toBe(-4);
  });

  test('multiply 10 and 0', () => {
    // Arrange
    const call = new Calculator(10, 0);

    // Act
    const result = call.multiply();

    // Assert
    expect(result).toBe(0);
  });
});
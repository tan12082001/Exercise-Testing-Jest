// function to return string length
const stringLength = (s) => {
  const slength = s.split(' ').join('').length;

  // function expand to check if string length is above 1 and below 11
  if (slength < 11 && slength > 0) {
    return slength;
  }
  throw new Error('The string length doesnt meet requirements');
};

// function to return reverse string of a string.
const reverseString = (s) => {
  const sreverse = s.split('').reverse().join('');
  return sreverse;
};

// function to capitalize a string.
const capitalize = (s) => {
  const scapital = s[0].toUpperCase() + s.slice(1);
  if (typeof(scapital) === 'string') {
    return scapital;
  }
  throw new Error('The given test case is not a string');
};

// class for simple calculator with add, subtract, divide and multiply.
class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  divide() {
    return this.a / this.b;
  }

  multiply() {
    return this.a * this.b;
  }
}

module.exports = {
  stringLength, reverseString, capitalize, Calculator,
};
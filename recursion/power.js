function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent -1);
 }
var pow = power(4, 3);
console.log(pow);

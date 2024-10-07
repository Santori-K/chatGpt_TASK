function factorial(a) {
  let res = 1;
  for (let i = 1; i <= a; a++) {
    res *= i;
  }
  return res;
}

module.exports = { factorial };

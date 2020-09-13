function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

function main() {
  const n = +readLine();

  console.log(factorial(n));
}

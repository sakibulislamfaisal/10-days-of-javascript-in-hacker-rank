function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = "HackerRank ";
  console.log(parseInt(secondInteger) + firstInteger);
  console.log(firstDecimal + parseFloat(secondDecimal));
  console.log(firstString + secondString);
}

function main() {
  const secondInteger = readLine();
  const secondDecimal = readLine();
  const secondString = readLine();

  performOperation(secondInteger, secondDecimal, secondString);
}

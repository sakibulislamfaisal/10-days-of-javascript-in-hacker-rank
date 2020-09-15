"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getSecondLargest(nums) {
  const max = Math.max.apply(null, nums);
  nums.splice(nums.indexOf(max), 2);
  return Math.max.apply(null, nums);
}

function main() {
  const n = +readLine();
  const nums = readLine().split(" ").map(Number);

  console.log(getSecondLargest(nums));
}

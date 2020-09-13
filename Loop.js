function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      console.log(char);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (
      char !== "a" &&
      char !== "e" &&
      char !== "i" &&
      char !== "o" &&
      char !== "u"
    ) {
      console.log(char);
    }
  }
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}

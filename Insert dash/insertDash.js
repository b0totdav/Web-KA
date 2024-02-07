function insertDash(num) {
  let tomb=num.toString().split("");
 
  for(let i=0; i < tomb.length - 1; i++) {
    if (1*tomb[i] % 2 != 0 && 1*tomb[i + 1] % 2 != 0) {
      tomb.splice(i, 1, tomb[i] + "-");
    }
  }
  return tomb.join("");
}


console.log((insertDash(454793) + '4547-9-3'))
console.log((insertDash(123456) + '123456'))
console.log((insertDash(1003567) + '1003-567'))
function numInput (inputNum) {
  newNum = [];
  for (i = 0; i <= inputNum; i += 1) {
    newNum.push(i);
  }
  return newNum;
}

console.log(numInput(5))
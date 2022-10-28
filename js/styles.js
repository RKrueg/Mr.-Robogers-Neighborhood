function numInput (inputNum) {
  newNum = [];
  for (i = 0; i <= inputNum; i += 1) {
    newNum.push(i);
  }
  return newNum;
}

function containesA1 (inputNum) {
  let hasA1 = false;
  let beep = inputNum + "".split("");
  if (beep[0] === '1' || beep[1] === '1' || beep[3] === '1' || beep[4] === '1') {
    hasA1 = true;
  }
  return hasA1;
}








//console.log(numInput(5))
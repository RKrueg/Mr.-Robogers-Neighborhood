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
  if (beep[0] === '1' || beep[1] === '1' || beep[2] === '1' || beep[3] === '1' || beep[4] === '1' || beep[5] === '1') {
    hasA1 = true;
  }
  return hasA1;
}

function containesA2 (inputNum) {
  let hasA2 = false;
  let boop = inputNum + "".split("");
  if (boop[0] === '2' || boop[1] === '2' || boop[2] === '2' || boop[3] === '2' || boop[4] === '2' || boop[5] === '2') {
    hasA2 = true;
  }
  return hasA2;
}


function containesA3 (inputNum) {
  let hasA3 = false;
  let boop = inputNum + "".split("");
  if (boop[0] === '3' || boop[1] === '3' || boop[2] === '3' || boop[3] === '3' || boop[4] === '3' || boop[5] === '3') {
    hasA3 = true;
  }
  return hasA3;
}

function rogers(inputNum) {
  if (containesA1(inputNum) === true) {
    return "Beep!"
  } else if (containesA2(inputNum) === true) {
  return "Boop!"
  } else if (containesA3(inputNum) === true) {
    return "Won't you be my neighbor?"
  }
}






//console.log(numInput(5))
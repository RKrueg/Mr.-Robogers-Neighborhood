function numInput (inputNum) {
  let newNum = [];
  for (i = 0; i <= inputNum; i += 1) {
    newNum.push(rogers(i));
  }
  return newNum;
}

function containesA1 (inputNum) {
  let hasA1 = '';
  let beep = inputNum + "".split("");
  if (beep[0] === '1' || beep[0] && beep[1] === 1) {
    hasA1 = true;
  } else if (beep[0] === '1' && beep[1] != '1') {
    hasA1 = false;
  }
  return hasA1;
}

function containesA2 (inputNum) {
  let hasA2 = false;
  let boop = inputNum + "".split("");
  if (boop[0] === '2' || boop[1] === '2') {
    hasA2 = true;
  }
  return hasA2;
}


function containesA3 (inputNum) {
  let hasA3 = false;
  let boop = inputNum + "".split("");
  if (boop[0] === '3' || boop[1] === '3') {
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
  } else {   
  }
}

window.addEventListener("load" , function(){
  let form = document.querySelector("form");
  form.addEventListener("submit" , handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  
  const input = document.getElementById('input').value;

  const p = document.querySelector('p#output');
  document.getElementById('output').innerText = numInput(input); 
}






//console.log(numInput(5))
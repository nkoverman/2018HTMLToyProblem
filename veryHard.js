var input;
var namesFull = [];
var namesLast = [];
var namesSorted = [];

function getNames() {
  input = document.getElementById('names').value;
  namesFull = input.split(",");
  //console.log(`getName() returns namesFull as: ${namesFull}`);
}

function getLasts() {
  for (var i = 0; i < namesFull.length; i++) {
    namesLast.push(namesFull[i].split(" ")[1]);
  }
  //console.log(`getLasts receives namesFull as: ${namesFull}`);
  //console.log(`getLasts outputs namesLast as: ${namesLast}`);
}

function sortLasts() {
  namesLast.sort();
  console.log(`sortLasts() returns namesLast as: ${namesLast}`);
}

function rearrangeFull() {
  //if the second word of the new name array matches the first item in namesLast, push to namesSorted. Remove the that first item from namesLast.
  
  restartLoop:
  while (true) {
    for (i = 0; i < namesFull.length; i++) {
      console.log(`rearrangeFull iteration ${i}`)
      console.log(`New namesSorted is: ${namesSorted}`);
      console.log(`i+1 = ${i+1} and namesFull.length = ${namesFull.length}`);

      if (namesFull[i].split(" ")[1] === namesLast[0]) {
        //console.log(`namesFull[i].split(" ")[1] is ${namesFull[i].split(" ")[1]}`);
        //console.log(`namesLast[0] is ${namesLast[0]}`);
        namesSorted.push(namesFull[i]);
        namesLast.splice(0, 1);
        //console.log(`New namesLast is: ${namesLast}`);
      }
      
      if (namesLast.length > 0 && i+1 === namesFull.length) {
        continue restartLoop;
      }
    }
    break;

  }
}

function displayResult() {
  console.log(`displayResult receives namesSorted as: ${namesSorted}`)
  document.getElementById('result').innerHTML = namesSorted.join();
}

function reset() {
  document.getElementById('names').value = "";
  namesFull = [];
  namesLast = [];
  namesSorted = [];  
}

function alphabetize(input) {
  //1) Create names array, split from user input
  getNames();
  
  //2) Map last names into new array
  getLasts();
  
  //3) Sort last names array alphabetically
  sortLasts();
  
  //4) Use that order to reset Full Names array
  rearrangeFull();
  
  //6) Display on UI
  displayResult();
  
  //5) Clear input field and data
  reset();
  
}

window.onload = function () {
  document.getElementById('submit').addEventListener('click', alphabetize);
};
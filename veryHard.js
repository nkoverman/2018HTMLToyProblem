var input;
var namesFull = [];
var namesLast = [];
var namesSorted = [];

function getNames() {
  input = document.getElementById('names').value;
  namesFull = input.split(", ");
}

function getLasts() {
  for (var i = 0; i < namesFull.length; i++) {
    namesLast.push(namesFull[i].split(" ")[1]);
  }
}

function sortLasts() {
  namesLast.sort();
}

function rearrangeFull() {
  restartLoop:
  while (true) {
    for (i = 0; i < namesFull.length; i++) {
      
      //Use the sorted last name array to build new sorted array in order
      if (namesFull[i].split(" ")[1] === namesLast[0]) {
        namesSorted.push(namesFull[i]);
        namesLast.splice(0, 1);
      }
      
      //Restart the loop if there are still names to be sorted
      if (namesLast.length > 0 && i+1 === namesFull.length) {
        continue restartLoop;
      }
    }
    break;

  }
}

function displayResult() {
  console.log(`displayResult receives namesSorted as: ${namesSorted}`)
  document.getElementById('result').innerHTML = namesSorted.join(", ");
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
var input;
var namesFull = [];
var namesLast = [];
var namesSorted = [];

function init() {
  document.getElementById('alphabetical-by-Last-Name').innerHTML = "";
  namesFull = [];
  namesLast = [];
  namesSorted = []; 
}

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
  for (i = 0; i < namesSorted.length; i++) {
    document.getElementById('alphabetical-by-Last-Name').insertAdjacentHTML(`beforeend`, `<li>${namesSorted[i]}</li>`);
  }
}

function clearField() {
  document.getElementById('names').value = "";
}

function alphabetize(input) {
  //1) Initialize
  init();
  
  //2) Create Names array, split from user input
  getNames();
  
  //3) Map Last Names into new array
  getLasts();
  
  //4) Sort Last Names array alphabetically
  sortLasts();
  
  //5) Use that order to reset Full Names array
  rearrangeFull();
  
  //6) Display Result as ordered list in UI;
  displayResult();
  
  //7) Clear input field
  clearField();
}

window.onload = function () {
  document.getElementById('submit').addEventListener('click', alphabetize);
};
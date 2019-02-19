"use strict"

let colors = [];
let numOfSquares = 6;
let pickedColor;
let squares = document.querySelectorAll(".square");
let message = document.querySelector("#message");
let colorDisplay = document.querySelector("#colorDisplay");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for(let i=0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
      reset();  
    });
  }
}

function setupSquares() {
  for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
      let clickedColor = this.style.backgroundColor;
      // compare clicked color to picked color
      if(clickedColor === pickedColor) {
        message.textContent = "Correct!";
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  colors = generateRandomColor(numOfSquares);
  pickedColor = colorPicked();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  message.textContent = "";
  for(let i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  } h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

// this function when called, changes all the colors in the square
//...when the correct color is guessed.
function changeColors(color) {
  for(let i = 0; i <= squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
// this function generates a random number that is used 
// ...to pick a random color from our colors array
function colorPicked() {
  let randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

function generateRandomColor(num) {
  let arr = [];
  for(let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb("+ r + ", "+ g + ", "+ b + ")";
}
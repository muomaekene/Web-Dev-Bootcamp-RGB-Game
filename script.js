"use strict"

// create an array of colors that'll be used in the program
let colors = generateRandomColor(6);
let numOfSquares = 6;
let squares = document.querySelectorAll(".square");
let pickedColor = colorPicked();
let message = document.querySelector("#message");
let colorDisplay = document.querySelector("#colorDisplay");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numOfSquares = 3;
  colors =generateRandomColor(numOfSquares);
  pickedColor = colorPicked();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 6;
  colors =generateRandomColor(numOfSquares);
  pickedColor = colorPicked();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
  colors = generateRandomColor(numOfSquares);
  pickedColor = colorPicked();
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  message.textContent = "";
  for(let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  } h1.style.backgroundColor = "steelblue";
});

// loop through the colors array and assign each color to our square class
for(let i = 0; i < colors.length; i++) {
  //select colors
  squares[i].style.backgroundColor = colors[i];
  //select clicked colors
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
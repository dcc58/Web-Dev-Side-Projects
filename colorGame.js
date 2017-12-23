var square = document.querySelectorAll(".square");
var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");

var display = document.querySelector("#display");
var colors = document.querySelector("#colors");
var title = document.querySelector("#title");
var button = document.querySelectorAll("button");
var menuItems = document.querySelectorAll(".menuItems");

/* Main body of Code */
var mode = 6; /*hard = 6, easy = 3 */
var tile = Math.floor(Math.random()*mode);
title.style.backgroundColor = "rgb(20, 20, 100)";
colors.addEventListener("click", restartGrid);
colors.addEventListener("mouseover", highlight);
colors.addEventListener("mouseout", unhighlight);
for(var i = 2; i < menuItems.length; i++){
		menuItems[i].addEventListener("click", selectedHighlight);
}
generateColor(mode);

/*functions listed below */
function generateColor(mode){
	for(var i = 0; i < square.length; i++){
		var redColor = Math.floor(Math.random()*256);
		var greenColor = Math.floor(Math.random()*256);
		var blueColor = Math.floor(Math.random()*256);
		square[i].style.backgroundColor = "rgb(" + redColor + ", " + greenColor + ", " + blueColor + ")";
		square[i].style.borderColor = "white";
		square[i].style.visibility = "visible";
		if(i == tile){
			red.innerText = redColor;
			green.innerText = greenColor;
			blue.innerText = blueColor;
		}
		square[i].addEventListener("click", function(){
			if(this.style.backgroundColor == square[tile].style.backgroundColor){
				display.innerText = "Correct!";
				colors.innerText = "Play Again?";
				changeColor(square, mode);
			}
			else{
				this.style.backgroundColor = "rgb(20, 20, 20)";
				this.style.borderColor = "rgb(20, 20, 20)";
				display.innerText = "Try Again";
			}
		});
	}
	generateSquares(mode);
}

function generateSquares(difficulty){
	if (difficulty == 3){
		for(var i = mode; i < square.length; i++){
			square[i].style.visibility = "hidden";
		}
	}
}

function changeColor(object, mode){
	for(var i = mode - 1; i >= 0; i--){
		object[i].style.backgroundColor = object[tile].style.backgroundColor;
		object[i].style.borderColor = object[tile].style.backgroundColor;
	}
	title.style.backgroundColor = square[tile].style.backgroundColor;
	generateSquares(mode);
}

function restartGrid(){
	title.style.backgroundColor = "rgb(20, 20, 100)";
	tile = Math.floor(Math.random()*mode);
	colors.innerText = "New Colors";
	display.innerText = " ";
	generateColor(mode);
}

function selectedHighlight(){
		this.classList.add("selected");
		if(this == easy){
			hard.classList.remove("selected");
			mode = 3;
		}
		else{
			easy.classList.remove("selected");
			mode = 6;
		}
		restartGrid();
}

function highlight(){
	this.classList.add("selected");
}

function unhighlight(){
	this.classList.remove("selected");
}
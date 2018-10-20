var numSquares = 6;
var colors = generateRandomColors (numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById ("colorDisplay");
var messageDisplay = document.getElementById ("message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.getElementById ("easyBtn");
var hardBtn = document.getElementById ("hardBtn");

easyBtn.addEventListener ("click",function(){
	easyBtn.classList.add ("selected");
	hardBtn.classList.remove ("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//pic new color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for (var i = 0; i < squares.length; i++){
	if (colors[i]){
		squares[i].style.backgroundColor = colors[i];
	}
		else {
			squares[i].style.display = "none";
		}
	}
	
	reset.textContent = "New Colors";
	h1.style.backgroundColor = "#5D9DF3";
	messageDisplay.textContent = "";
});

hardBtn.addEventListener ("click",function(){
	hardBtn.classList.add ("selected");
	easyBtn.classList.remove ("selected");
	numSquares = 6;
	colors = generateRandomColors (numSquares);
	//pic new color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].style.display = "block";
	}
	
	reset.textContent = "New Colors";
	h1.style.backgroundColor = "#5D9DF3";
	messageDisplay.textContent = "";
});


reset.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pic new color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
	
	messageDisplay.textContent = "";
	reset.textContent = "New Colors";
	h1.style.backgroundColor = "#5D9DF3";
	
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	
	squares[i].addEventListener ("click", function (){
		var clickedColor = this.style.backgroundColor;
		
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
			reset.textContent = "Play Again!";
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			reset.textContent = "New Colors";
		}
	});
}

function changeColors (colors){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors;
	}
}

function pickColor (){
	var random = Math.floor(Math.random () * colors.length);
	return colors [random];
}

function generateRandomColors (num){
	var arr = [];
	
	for (i = 0; i < num; i++){
		arr.push (randomColor());
	}
	return arr;
}

function randomColor (){
	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
	
	return "rgb(" + r +", " + g + ", " + b + ")";
}














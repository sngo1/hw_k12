/*
Alessandro Cartegni, Samantha Ngo
Team lesBounce
SoftDev2 pd07
K11 -- All That Bouncin'
2018-03-11
*/

var container = document.getElementById("vimage");
var clearButton = document.getElementById("clear");
var allDots = [];

/*
var drawDot = function(x, y){
    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.xCor = x;
    dot.yCor = y;
    dot.fill = "orange";
    dot.radius = "20";
    dot.display = function(){
	dot.setAttribute("cx", dot.xCor);
	dot.setAttribute("cy", dot.yCor);
	dot.setAttribute("fill", dot.fill);
	dot.setAttribute("r", dot.radius);
	container.appendChild(dot);
	allDots[allDots.length] = dot;
	console.log(allDots);
    }
    console.log("---- Dot: ", dot);
    return dot;
}
*/

var runAnimation = function(obj){
     // Delete last circle drawn -- stop motion animation
    //clearBoard();SAVE FOR UPDATING ALL DOTS FUNCTION 
    console.log("OBJ: ", obj);
    // Every time a coordinate reaches an edge, reverse it to go in the opposite direction
    if (obj.xCor >= 500 || obj.xCor <= 0){
	obj.xAdd *= -1;
    }
    if (obj.yCor >= 500 || obj.yCor <= 0){
	obj.yAdd *= -1;
    }

    // Update coordinates accordingly
    obj.xCor += obj.xAdd;
    obj.yCor += obj.yAdd;

    // Draw new circle at coordinate
    obj.update(obj.xCor, obj.yCor);
    requestID = window.requestAnimationFrame(runAnimation);
    console.log("REQID: ", obj.requestID);
    return true;
}

var createDot = function(){
    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.xCor = Math.round(Math.random() * 501);
    dot.yCor = Math.round(Math.random() * 501);
    dot.fill = "orange";
    dot.radius = "20";
    dot.requestID = -1;
    dot.xAdd = 1;
    dot.yAdd = 1;
    dot.start = function(){
	dot.setAttribute("cx", dot.xCor);
	dot.setAttribute("cy", dot.yCor);
	dot.setAttribute("fill", dot.fill);
	dot.setAttribute("r", dot.radius);
	container.appendChild(dot);
	allDots[allDots.length] = dot;
	console.log(allDots);
	console.log("Animation starting...");
	console.log("THIS: ", this);
	console.log("DOT: ", dot);
	runAnimation(dot);
    }
    dot.update = function(x,y){
	console.log("Updating dot location...");
	dot.setAttribute("cx", x);
	dot.xCor = x;
	dot.setAttribute("cy", y);
	dot.yCor = y;
	dot.setAttribute("fill", dot.fill);
	dot.setAttribute("r", dot.radius);
	console.log(allDots);
	console.log("Dot location updated.");
    }
    dot.stop = function(){
	console.log("Cancelling ID: ", dot.requestID);
	window.cancelAnimationFrame(dot.requestID);
	console.log("...Animation stopped.");
	return true;
    }
    console.log("Creating dot...");
    dot.start();
    console.log("Created Dot: ", dot);
    return dot;
}

/*
var canvasClicked = function(e){
    if(e.target == this){
	var obj = drawDot(e.offsetX, e.offsetY);
	obj.display();
	console.log("drawn");
    }
};
*/

//Remove all the inner nodes of the SVG area
var clear = function(e){
    console.log("Clearing...");
    var firstChild = container.firstChild;
    while(firstChild){
	container.removeChild(firstChild);
	firstChild = container.firstChild;
    }
    console.log("Board cleared.");
    first = true;
}

container.addEventListener("click", createDot);
clearButton.addEventListener("click", clear);

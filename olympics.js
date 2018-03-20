/*
Alessandro Cartegni, Samantha Ngo
Team lesBounce
SoftDev2 pd07
K12 -- Medallions ...of Data!
2018-03-19
*/

var container = d3.select("svg")[0];
console.log("CONTAINER: ", container);
container.enter().append("circle");
console.log("CONTAINER: ", container);
var switchButton = d3.select("button");
console.log("SWITCH: ", switchButton);

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

drawDot(250, 200);
drawDot(250, 300);
drawDot(250, 400);

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

var iBronzeRadius = -1;
var iSilverRadius = -1;
var iGoldRadius = -1;
// Displays the three circles based on radius for Italy
var displayItaly = function(){
    console.log("Changing display to Italy's Stats...");

    /* Code Here */

    console.log("Stats changed.");
    return true;
}

var fBronzeRadius = -1;
var fSilverRadius = -1;
var fGoldRadius = -1;
// Displays the three circles based on radius for France
var displayFrance = function(){
    console.log("Changing display to France's Stats...");

    /* Code Here */

    console.log("Stats changed.");
    return true;
}

var nextCountry = "Italy";

var changeCountry = function(){
    if (nextCountry == "Italy"){
	displayItaly();
	console.log("Switched to Italy. Now displaying Italy's stats.");
	nextCountry = "France";
	return true;
    } else {
	displayFrance();
	console.log("Switched to France. Now displaying France's stats.");
	nextCountry = "Italy";
	return true;
    }
}

switchButton.on("click", changeCountry);

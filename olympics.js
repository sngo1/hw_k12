/*
Alessandro Cartegni, Samantha Ngo
Team lesBounce
SoftDev2 pd07
K12 -- Medallions ...of Data!
2018-03-19
*/

/*var container = d3.select("svg")[0];
console.log("CONTAINER: ", container);
container.enter().append("circle");
console.log("CONTAINER: ", container);
var switchButton = d3.select("button");
console.log("SWITCH: ", switchButton);
*/

var container = document.getElementById("vimage");
var switchButton = document.getElementById("switch");

var drawDot = function(x, y, r, f){
    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
    dot.setAttribute("fill", f); 
    dot.setAttribute("r", r);
    container.appendChild(dot);

    console.log("---- Dot: ", dot);
    return dot;
}

var drawRect = function(x, y, h, w, f){
    var rect =  document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("height", h);
    rect.setAttribute("width", w);
    rect.setAttribute("fill", f);
    
    container.appendChild(rect);

    return rect;
}
    

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

//var iBronzeRadius = -1;
//var iSilverRadius = -1;
//var iGoldRadius = -1;

// Displays the three circles based on radius for Italy
var displayItaly = function(){
    console.log("Changing display to Italy's Stats...");

    drawRect(0, 0, 500, 167, "green");
    drawRect(333, 0, 500, 167, "red");

    drawDot(125, 250, 20, "gray");
    drawDot(250, 250, 30, "yellow");
    drawDot(375, 250, 50, "orange");
    

    console.log("Stats changed.");
    return true;
}

//var fBronzeRadius = -1;
//var fSilverRadius = -1;
//var fGoldRadius = -1;

// Displays the three circles based on radius for France
var displayFrance = function(){
    console.log("Changing display to France's Stats...");

    drawRect(0, 0, 500, 167, "blue");
    drawRect(333, 0, 500, 167, "red");

    drawDot(125, 250, 40, "gray");
    drawDot(250, 250, 50, "yellow");
    drawDot(375, 250, 60, "orange");

    console.log("Stats changed.");
    return true;
}

var nextCountry = "Italy";

var changeCountry = function(){
    if (nextCountry == "Italy"){
	clear();
	displayItaly();
	console.log("Switched to Italy. Now displaying Italy's stats.");
	nextCountry = "France";
	return true;
    } else {
	clear();
	displayFrance();
	console.log("Switched to France. Now displaying France's stats.");
	nextCountry = "Italy";
	return true;
    }
}

switchButton.addEventListener("click", changeCountry);

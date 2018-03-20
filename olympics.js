/*
Alessandro Cartegni, Samantha Ngo
Team lesBounce
SoftDev2 pd07
K12 -- Medallions ...of Data!
2018-03-19
*/

var container = d3.select("svg");
console.log("CONTAINER: ", container);

/* HOW TO DRAW A CIRCLE:
container.append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "orange");
* DOESN'T SEEM TO ADD THE CIRCLE TO THE ARRAY
* Returns a format similar to that returned by container
*/

console.log("CONTAINER: ", container);
var switchButton = d3.select("button");
console.log("SWITCH: ", switchButton);

var drawDot = function(x, y, r, f){
    console.log("Drawing dot...");
    container.append("circle").attr("cx", x).attr("cy", y).attr("r", r).style("fill", f);
    console.log("...dot drawn.");
    return true;
}

var drawRect = function(x, y, h, w, f){
    console.log("Drawing rectangle...");
    container.append("rect").attr("x", x).attr("y", y).attr("height", h).attr("width", w).style("fill", f);
    console.log("...rectangle drawn.");
    return true;
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

displayFrance()
switchButton.on("click", changeCountry);

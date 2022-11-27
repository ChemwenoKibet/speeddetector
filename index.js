const prompt = require("prompt-sync")()
let speed = prompt("Enter speed: "); //Prompts you to enter the speed of a car
if (speed<70){ // Beginning of the if...else statement
    console.log("OK");
}else{
    let demeritPoint = ((speed-70)/5) //calculates the demerit points
    console.log("Points: " + demeritPoint);
    if (demeritPoint>12)
    console.log("License suspended"); 
}


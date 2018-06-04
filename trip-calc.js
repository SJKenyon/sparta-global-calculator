var distance = parseFloat(prompt('Trip distance?(in miles)'));
var fuel = parseFloat(prompt('Fuel efficiency?(in MPG)'));
var cost = parseFloat(prompt('Cost per gallon?(in £)'));
var speed = parseFloat(prompt('Speed?(in MPH)'));

if(distance > 0) {
  var time = (distance / speed);
console.log("Your trip will take " + time + " hours");
} else {
  console.log("ERROR");
}

if(speed > 60){
  var x = parseFloat(speed - 60);
  var y = parseFloat(x * 2);
  var mpg = parseFloat(fuel - y);
  var tcost = (distance / mpg) * cost;
} else{
  var tcost = (distance / fuel) * cost;
}

if(mpg > 0) {
  console.log("and will cost £" + tcost);
} else {
  console.log("ERROR");
}

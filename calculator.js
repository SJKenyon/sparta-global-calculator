var k = true;

while (k == true) {

  // get the user inputs
  var choice = prompt("Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (mo)dulus (p)ower (sq)uare root");
  var x = parseInt(prompt('Enter first value'));
  var y = parseInt(prompt('Enter the second value'));

  if(choice == "a") {
    var a = (x + y);
    console.log(a);
  }
  else if(choice == "s") {
    var s = (x - y);
    console.log(s);
  }
  else if(choice == "m") {
    var m = (x * y);
    console.log(m);
  }
  else if(choice == "d") {
    var d = (x / y);
    console.log(d);
  }
  else if(choice == "mo") {
    var mo = (x % y);
    console.log(mo);
  }
  else if(choice == "p") {
    var p = (x ** y);
    console.log(p);
  }
  else if(choice == "sq") {
    console.log("Square root of first number: " + Math.sqrt(x));
    console.log("Square root of second number: " + Math.sqrt(y));
  }
  else {
    console.log("ERROR");
  }

  k = prompt("Exit? (true)/(false)");
}

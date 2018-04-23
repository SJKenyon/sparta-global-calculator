var system = prompt("(i)mperial or (m)etric?");

if(system == "m") {
  var h = parseFloat(prompt('What is your height (in m)?'));
  var w = parseFloat(prompt('What is your weight (in kg)?'));
  var bmi = (w/(h*h));
  console.log(bmi);
} else if(system == "i") {
  var height = parseFloat(prompt("What is your height (in inches)?"));
  var weight = parseFloat(prompt("What is your weight (in pounds)?"));
  var mheight = parseFloat((height * 0.025)**2);
  var mweight = parseFloat((weight * 0.45));
  var bmi = (mweight / mheight);
  console.log(bmi)
} else {
  console.log(ERROR);
}

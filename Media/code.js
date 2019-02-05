
onEvent("slider1", "input", function(event) {
  console.log("slider1 value: " + getNumber("slider1"));
});
onEvent("slider2", "input", function(event) {
  console.log("slider2 value: " + getNumber("slider2"));
});
onEvent("slider4", "input", function(event) {
  console.log("slider4 value: " + getNumber("slider4"));
});
onEvent("slider9", "input", function(event) {
  console.log("slider9 value: " + getNumber("slider9"));
});
onEvent("slider11", "input", function(event) {
  console.log("slider11 value: " + getNumber("slider11"));
});
onEvent("slider8", "input", function(event) {
  console.log("slider8 value: " + getNumber("slider8"));
});
onEvent("slider17", "input", function(event) {
  console.log("slider17 value: " + getNumber("slider17"));
});
onEvent("slider10", "input", function(event) {
  console.log("slider10 value: " + getNumber("slider10"));
});
onEvent("slider7", "input", function(event) {
  console.log("slider7 value: " + getNumber("slider7"));
});
onEvent("slider3", "input", function(event) {
  console.log("slider3 value: " + getNumber("slider3"));
});
onEvent("slider13", "input", function(event) {
  console.log("slider13 value: " + getNumber("slider13"));
});
onEvent("slider16", "input", function(event) {
  console.log("slider16 value: " + getNumber("slider16"));
});
onEvent("slider5", "input", function(event) {
  console.log("slider5 value: " + getNumber("slider5"));
});
onEvent("slider6", "input", function(event) {
  console.log("slider6 value: " + getNumber("slider6"));
});
onEvent("slider19", "input", function(event) {
  console.log("slider19 value: " + getNumber("slider19"));
});
onEvent("slider20", "input", function(event) {
  console.log("slider20 value: " + getNumber("slider20"));
});
onEvent("slider18", "input", function(event) {
  console.log("slider18 value: " + getNumber("slider18"));
});
onEvent("slider21", "input", function(event) {
  console.log("slider21 value: " + getNumber("slider21"));
});
onEvent("slider22", "change", function(event) {
  console.log("slider22 value: " + getNumber("slider22"));
});
onEvent("button1", "click", function(event) {
  console.log("button1 clicked!");
  setScreen("screen2");
  var x = getNumber("slider1")+getNumber("slider2")+getNumber("slider4")+getNumber("slider9")+getNumber("slider11")+getNumber("slider8")+getNumber("slider17")
  +getNumber("slider10")+getNumber("slider7")+getNumber("slider3")+getNumber("slider13")+getNumber("slider16")+getNumber("slider5")+
  getNumber("slider6")+getNumber("slider19")+getNumber("slider20")+getNumber("slider18")+getNumber("slider21")+getNumber("slider22");
  if (getChecked("checkbox1")) {
    write(x/19);
  } else {
    write((x-getNumber("slider6"))/18);
  }
});
onEvent("checkbox1", "change", function(event) {
  console.log("checkbox1 checked? " + getChecked("checkbox1"));
});
onEvent("button2", "click", function(event) {
  console.log("button2 clicked!");
  setScreen("screen1");
});

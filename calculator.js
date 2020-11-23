// jshint esversion: 6

const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", function (req, res) {
  // console.log(__dirname) ;
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // res.send("thanks for posting nums");
  console.log(req.body);
  console.log(req.body.num1 + " " + typeof req.body.num1);
  console.log(req.body["num2"] + " " + typeof req.body.num2);
  console.log("req.body.sum is " + req.body.operator);
  num1 = Number(req.body.num1);
  num2 = Number(req.body["num2"]);
  switch (req.body.operator) {
    case "+":
      operator = add;
      console.log("operator function set as: " + operator);
      break;
    case "x":
      operator = multiply;
      console.log("operator function set as: " + operator);
      break;
    case "-":
      operator = subtract;
      console.log("operator function set as: " + operator);
      break;
    case "/":
      operator = divide;
      console.log("operator function set as: " + operator);
      break;
  }
  console.log(calculator(num1, num2, operator));
  res.send("the result is " + calculator(num1, num2, operator));
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

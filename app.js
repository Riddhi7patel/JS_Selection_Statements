console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
let favoriteNumber = 4;

let guessNumber = prompt("what is your favorite number");
console.log(guessNumber);

if (guessNumber < favoriteNumber) {
  console.log("Too Low");
} else if (guessNumber > favoriteNumber) {
  console.log("Too High");
} else {
  console.log("congratulation!!");
}

let birthMonth = prompt("What is your birth month")

switch (birthMonth) {
  case "June":
  case "July":
  case "August":
    console.log("Summer");
    break;
  case "September":
  case "October":
  case "Novrmber":
    console.log("Fall");
    break;
    default:
    console.log("i love every season");
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
     break;
     default:
    type = "other";
}

if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

switch (colorId) {
  case "BL":
    color = "Tank top";
    break;
  case "BU":
    color = "Bule";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
     break;
  default:
    color = "white";
}


if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}
switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
     break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
// var age = prompt('What is Your Age?');

// var myHead = document.getElementById('head');

// myHead.innerHTML = age;

// var heading = document.getElementById('head');

// function greeting(myName) {
//     var greet = 'Hello ' + myName;
//     heading.innerHTML = greet;
// }

// var name = prompt('What is your name??');

// greeting(name);

// function hello(a, b) {
//     var c = a + b;
//     console.log(c);

//     return c;
// }

// hello(2, 4);

// var fruits = ['banana', 'orange', 'pineapple', 'lemon', 'strawberry'];

// for (i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// console.log('Fruits String', fruits.toString())

// var emptyArray = [];

// for (var num = 0; num < 10; num++) {
//     emptyArray.push(num);
// }
// console.log(emptyArray);

// let student = {
//     firstName: 'Rabeet',
//     lastName: 'Khan',
//     age: 20,
//     height: 150,
//     studentInfo: function () {
//         return this.firstName + ' ' + this.lastName
//     }

// }
// console.log(student)
// console.log(student.firstName + ' ' + student.lastName);
// console.log(student.studentInfo());

// Challenge 1: Your Age in Days

var resultInDays = document.getElementById("flex-box-result");

function ageInDays() {
  var userBirthYear = +prompt("Enter Your Birth Year");
  var birthYear = userBirthYear;
  var ageInDays = (2020 - birthYear) * 365;

  var h1 = document.createElement("h1");
  h1.id = "newEl";
  var answer = document.createTextNode(
    "Your are " + ageInDays + " " + "Days Old"
  );
  h1.appendChild(answer);

  var compRes = resultInDays.appendChild(h1);
}

function resetAll() {
  newEl.remove();
}

// -----------------------------------------------------------------------------------

// Challenge 2: Cat Generator

var flexContainer = document.getElementById("cat-gen-div");

function catGenerator() {
  var newImgEl = document.createElement("img");
  var imgInCont = flexContainer.appendChild(newImgEl);
  console.log(imgInCont);
  newImgEl.src = "./images/cat-gif.gif";
  newImgEl.alt = "Cat-Gif";
}

// -----------------------------------------------------------------------------------

// Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
  var humanChoice = yourChoice.id;
  // console.log(humanChoice);

  var botChoice = rpsArray(randomNum()); // Generate Random Num for Bot
  console.log(botChoice);

  var results = decideWinner(humanChoice, botChoice); // [0, 1] Human Lost! and Bot Win!
  console.log(results);

  var message = finalMessage(results); // {'message': 'You Won!', 'color': 'Green'}

  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomNum() {
  var ranNum = Math.floor(Math.random() * 3);
  return ranNum;
}

function rpsArray(number) {
  var array = ["rock", "paper", "scissor"][number];
  return array;
}

function decideWinner(yourChoice, compChoice) {
  var rpsDatabase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissor: 0 },
    scissor: { paper: 1, scissor: 0.5, rock: 0 },
  };

  var yourScore = rpsDatabase[yourChoice][compChoice];

  console.log(yourScore, "My Score");

  var compScore = rpsDatabase[compChoice][yourChoice];

  console.log(compScore, "Comp Score");

  return [yourScore, compScore];
}

function finalMessage([yourScore, compScore]) {
  if (yourScore === 0) {
    return { message: "You Lost!", color: "red" };
  } else if (yourScore === 1) {
    return { message: "You Win!", color: "blue" };
  } else {
    return { message: "You tied!", color: "green" };
  }
}

var rockImg = document.getElementById("rock");
var paperImg = document.getElementById("paper");
var scissorImg = document.getElementById("scissor");
var flexBoxDiv = document.getElementById("flex-box-rps-div");

function rpsFrontEnd(humanImgChoice, botImgChoice, finalMessage) {
  var imgsDatabase = {
    rock: rockImg.src,
    paper: paperImg.src,
    scissor: scissorImg.src,
  };

  rockImg.remove();
  paperImg.remove();
  scissorImg.remove();

  var humanDiv = document.createElement("div");
  var msgDiv = document.createElement("div");
  var botDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imgsDatabase[humanImgChoice] +
    "' width = '225px' style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
  msgDiv.innerHTML =
    "<h1 style = 'color: " +
    finalMessage["color"] +
    "; font-size: 60px; padding: 30px; '>" +
    finalMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" +
    imgsDatabase[botImgChoice] +
    "' width = '225px' style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

  flexBoxDiv.appendChild(humanDiv);
  flexBoxDiv.appendChild(msgDiv);
  flexBoxDiv.appendChild(botDiv);
}

function reset() {
  location.reload();
}

// -----------------------------------------------------------------------------------

// Challenge 4: Change The Color Of All Buttons

var allButtons = document.getElementsByTagName("button");

// console.log(allButtons);

copyAllButtons = [];

for (var i = 0; i < allButtons.length; i++) {
  var push = copyAllButtons.push(allButtons[i].classList[1]);
  //   console.log(push);
}

// console.log(copyAllButtons);

function buttonColorChange(selectOptions) {
  // console.log(selectOptions);
  if (selectOptions.value === "red") {
    allButtonsRed();
  } else if (selectOptions.value === "green") {
    allButtonsGreen();
  } else if (selectOptions.value === "random") {
    allButtonsRandomColor();
  } else if (selectOptions.value === "reset") {
    allButtonsReset();
  }
}

function allButtonsRed() {
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-danger");
  }
}

function allButtonsGreen() {
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-success");
  }
}

function allButtonsRandomColor() {
  var choices = ["btn-danger", "btn-warning", "btn-success", "btn-primary"];
  for (var i = 0; i < allButtons.length; i++) {
    var randomNum = Math.floor(Math.random() * 4);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[randomNum]);
  }
}

function allButtonsReset() {
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[i]);
  }
}

// -----------------------------------------------------------------------------------

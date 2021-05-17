var numberOfButtons = 
    document.querySelectorAll(".drum").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".drum")[j]
  .addEventListener("click", function() {
  
    var buttonStyle = this.innerHTML;
    sound(buttonStyle);
    animation(buttonStyle);
  });
}
  
document.addEventListener("keypress", function(event) {
  sound(event.key);
  animation(event.key);
});

function sound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("tom1.wav");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("DT_Tom02.wav");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("hiflngtm.wav");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("xlocanhl.wav");
      tom4.play();
      break;

    case "j":
      var tom5 = new Audio("Wime Snare Drum.wav");
      tom5.play();
      break;

    case "k":
      var tom6 = new Audio("crash LSL7 Rimshot1.wav");
      tom6.play();
      break;

    case "l":
      var tom7 = new Audio("Drum Kick and Ride-15327-Free-Loops.com.mp3");
      tom7.play();
      break;

    default: console.log(key);

  }
}


function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

















/*
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("images\Tom1B.wav");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("images\Tom2B.wav");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("images\Tom3B.wav");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("images\Tom4B.wav");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("images\Snare4a.wav");
      snare.play();
      break;

    case "k":
      var crash = new Audio("images\Crash5A.wav");
      crash.play();
      break;

    case "l":
      var kick = new Audio("images\KicksA5.wav");
      kick.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
*/
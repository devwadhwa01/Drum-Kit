for (var i = 0; i < document.querySelectorAll(".part").length; i++) {
  document.querySelectorAll(".part")[i].addEventListener("click", function() {
    var letter = this.document.querySelectorAll(".part")[i].classList[0];
    playSound(letter);
  });
}

document.addEventListener("keydown", function(event) {
  playSound(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("resources/");
      audio.play;
      break;
    case "a":
      var audio = new Audio("resources/");
      audio.play;
      break;
    case "s":
      var audio = new Audio("resources/");
      audio.play;
      break;
    case "d":
      var audio = new Audio("resources/");
      audio.play;
      break;
    case "j":
      var audio = new Audio("resources/");
      audio.play;
      break;
    case "k":
      var audio = new Audio("resources/");
      audio.play;
      break;
    default:
      console.log(key);
  }
}

// for (var i = 0; i < document.querySelectorAll(".part").length; i++) {
//   document.querySelectorAll(".part")[i].addEventListener("click", function() {
//     var letter = document.querySelectorAll(".part")[i].classList[0];
//     playSound(letter);
//   });
// }

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  pressed(event.key);
  icon(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("resources/left-tom.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("resources/right-tom.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("resources/floor-tom.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("resources/bass.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("resources/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("resources/crash.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
}

function pressed(currentKey){
  document.querySelector("."+currentKey).classList.add("opaque");
  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("opaque");
  },300);
}

function icon(currentKey){
    document.querySelector("."+currentKey+"-icon").classList.add("opaque");
  setTimeout(function(){
    document.querySelector("."+currentKey+"-icon").classList.remove("opaque");
  },300);
}

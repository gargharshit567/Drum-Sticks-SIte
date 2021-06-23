var i = 0;
for (i = 0; i < 7; i++)
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
  document.addEventListener("keypress",function(event){
     document.querySelector("button."+event.key).classList.add("pressed");

    switch(event.key) {
      case 'w':
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case 'a':
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case 's':
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case 'd':
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case 'l':
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case 'j':
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case 'k':
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      default:
        alert(event.key);
      }
    setTimeout(function(){
        document.querySelector("button."+event.key).classList.remove("pressed");
      },"150");
  })
function handleClick() {
  var obj= this.classList;
  this.classList.add("pressed");

  switch (this.innerHTML) {
    case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 's':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'd':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case 'l':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 'j':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case 'k':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      alert(this.innerHTML)

  }
  setTimeout(function(){
      obj.remove("pressed");
    },"150",obj);

}

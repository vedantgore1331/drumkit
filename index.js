document.addEventListener("keydown", function (event) {
    fun2(event.key);
    animationchange(event.key);
});

function f1() {
    var element = this.innerHTML;
    fun2(element);
    animationchange(element);
}

for (var i = 0; i <= document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", f1);
}

function fun2(element) {
    switch (element) {
        case 'w':
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case 'a':
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case 's':
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case 'd':
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case 'j':
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case 'k':
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case 'l':
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;

        default: console.log(element);
            break;
    }
}


function animationchange(element)
{
  document.querySelector("."+element).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+element).classList.remove("pressed");
  },150);
}
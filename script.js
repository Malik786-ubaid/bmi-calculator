const text = "Welcome to the Typing Effect Project!";
let index = 0;
const speed = 100;
const typeSound = document.getElementById("typeSound");

function typeText() {
  if (index < text.length) {
    document.getElementById("text").textContent += text.charAt(index);
    if (text.charAt(index) !== " ") {
      typeSound.currentTime = 0;
      typeSound.play();
    }
    index++;
    setTimeout(typeText, speed);
    function restartTyping() {
  index = 0;
  textElement.textContent = "";
  typeText();
}

  }
}

window.onload = typeText;

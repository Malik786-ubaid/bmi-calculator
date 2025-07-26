const text = "Welcome to the Typing Effect App!";
let index = 0;

function typeText() {
  const typed = document.getElementById("typed-text");
  if (index < text.length) {
    typed.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

typeText();

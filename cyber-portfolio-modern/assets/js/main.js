const text = ["Pentester", "Forense", "Blue Team"];
let i = 0, j = 0, currentText = "", isDeleting = false;
function type() {
  currentText = text[i];
  document.getElementById("typing-text").innerHTML = currentText.substring(0, j);
  if (!isDeleting && j < currentText.length) {
    j++;
    setTimeout(type, 150);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 80);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
    setTimeout(type, 800);
  }
}
type();
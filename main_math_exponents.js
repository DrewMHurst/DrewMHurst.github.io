////Math - Exponents and Radicals/////


////Define variables for click functions////
var mathIntro = document.getElementById("intro");
var underExponents = document.getElementById("exponents");
var multiplyExponents = document.getElementById("multiply");
var dividingExponents = document.getElementById("dividing");
var poweringExponents = document.getElementById("powering");
var introRadicals1 = document.getElementById("radicals_1");
var introRadicals2 = document.getElementById("radicals_2");
var summary = document.getElementById("summary");
var aQuiz1 = document.getElementById("quiz");
var next = document.getElementById("next");
var mathJax = document.getElementById("MathJax-script");

function changeText() {

////Conditions for click events////
  if (next.innerHTML === aQuiz1.innerHTML) {
    next.innerHTML != mathIntro.innerHTML; ////This prevents from going to intro page after quiz////
  }

  else if (next.innerHTML === introRadicals2.innerHTML) {
    next.innerHTML = summary.innerHTML;
  }

  else if (next.innerHTML === introRadicals1.innerHTML + mathJax.innerHTML) {
    next.innerHTML = introRadicals2.innerHTML;
  }

  else if (next.innerHTML === poweringExponents.innerHTML) {
    next.innerHTML = introRadicals1.innerHTML + mathJax.innerHTML;
  }

  else if (next.innerHTML === dividingExponents.innerHTML) {
    next.innerHTML = poweringExponents.innerHTML;
  }

  else if (next.innerHTML === multiplyExponents.innerHTML) {
    next.innerHTML = dividingExponents.innerHTML;
  }

  else if (next.innerHTML === underExponents.innerHTML) {
    next.innerHTML = multiplyExponents.innerHTML;
  }

  else {
    next.innerHTML = underExponents.innerHTML;
  }
}

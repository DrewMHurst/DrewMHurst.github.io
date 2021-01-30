////8 Parts of Speech Events/////


////Note: the (+) operator is one way to add blocks of HTML elements to a single variable; ////
////however, for the below functions to work it can be no more than 12 (+) operators. ////
////This is why I am condensing lists and tables.////


////Define variables for click functions////
var aIntroduction = document.getElementById("introduction");
var bNoun = document.getElementById("noun");
var bPronoun = document.getElementById("pronoun");
var bVerb = document.getElementById("verb");
var bAdjective = document.getElementById("adjective");
var bAdverb = document.getElementById("adverb");
var bPreposition = document.getElementById("preposition");
var bConjunction = document.getElementById("conjunction");
var bInterjection = document.getElementById("interjection");
var cQuiz1 = document.getElementById("quiz");
var next = document.getElementById("next");

function changeText() {

////Conditions for click events////
  if (next.innerHTML === cQuiz1.innerHTML) {
    next.innerHTML != aIntroduction.innerHTML; ////This prevents from going to intro page after quiz////
  }

  else if (next.innerHTML === bInterjection.innerHTML) {
    next.innerHTML = cQuiz1.innerHTML;
  }

  else if (next.innerHTML === bConjunction.innerHTML) {
    next.innerHTML = bInterjection.innerHTML;
  }

  else if (next.innerHTML === bPreposition.innerHTML) {
    next.innerHTML = bConjunction.innerHTML;
  }

  else if (next.innerHTML === bAdverb.innerHTML) {
    next.innerHTML = bPreposition.innerHTML;
  }

  else if (next.innerHTML === bAdjective.innerHTML) {
    next.innerHTML = bAdverb.innerHTML;
  }

  else if (next.innerHTML === bVerb.innerHTML) {
    next.innerHTML = bAdjective.innerHTML;
  }

  else if (next.innerHTML === bPronoun.innerHTML) {
    next.innerHTML = bVerb.innerHTML;
  }

  else if (next.innerHTML === bNoun.innerHTML) {
    next.innerHTML = bPronoun.innerHTML;
  }

  else {
    next.innerHTML = bNoun.innerHTML;
  }
}

function goBack() {

////Conditions for click events////
  if (next.innerHTML === aIntroduction.innerHTML) {
    next.innerHTML != cQuiz1.innerHTML; ////This prevents from going pass intro page////
  }

  else if (next.innerHTML === bNoun.innerHTML) {
    next.innerHTML = aIntroduction.innerHTML;
  }

  else if (next.innerHTML === bPronoun.innerHTML) {
    next.innerHTML = bNoun.innerHTML;
  }

  else if (next.innerHTML === bVerb.innerHTML) {
    next.innerHTML = bPronoun.innerHTML;
  }

  else if (next.innerHTML === bAdjective.innerHTML) {
    next.innerHTML = bVerb.innerHTML;
  }

  else if (next.innerHTML === bAdverb.innerHTML) {
    next.innerHTML = bAdjective.innerHTML;
  }

  else if (next.innerHTML === bPreposition.innerHTML) {
    next.innerHTML = bAdverb.innerHTML;
  }

  else if (next.innerHTML === bConjunction.innerHTML) {
    next.innerHTML = bPreposition.innerHTML;
  }

  else if (next.innerHTML === bInterjection.innerHTML) {
    next.innerHTML = bConjunction.innerHTML;
  }

  else if (next.innerHTML === cQuiz1.innerHTML) {
    next.innerHTML = bInterjection.innerHTML;
  }

  else {
    next.innerHTML = aIntroduction.innerHTML;
  }
}

//////////////////JavaScript prompt Quiz////////////////////

  function promptMe(){
  var questions = [
       {
            prompt: "For the sentence below, choose which part of speech the uppercase word is.\n \nI bought a BEAUTIFUL dress at the mall.\n \n(a) preposition\n(b) adjective\n(c) noun",
            answer1: "b",
            answer2: "B"
       },
       {
            prompt: "For the sentence below, choose which part of speech the uppercase word is.\n \nWhat did SHE ask you to do?\n \n(a) conjunction\n(b) preposition\n(c) pronoun",
            answer1: "c",
            answer2: "C"
       },
       {
            prompt: "For the sentence below, choose which part of speech the uppercase word is.\n \nI left my shoes UNDER the kitchen table.\n \n(a) adjective\n(b) preposition\n(c) pronoun",
            answer1: "b",
            answer2: "B"
       },
       {
            prompt: "For the sentence below, choose which part of speech the uppercase word is.\n \nIf we finish our work QUICKLY we can go to the movies.\n \n(a) adverb\n(b) conjunction\n(c) verb",
            answer1: "a",
            answer2: "A"
       },
       {
            prompt: "For the sentence below, choose which part of speech the uppercase word is.\n \nOn Saturdays I WORK from nine to five.\n \n(a) verb\n(b) preposition\n(c) adverb",
            answer1: "a",
            answer2: "A"
       }
  ];

  var score = 0;

  for (var i = 0; i < questions.length; i++){
       var response = window.prompt(questions[i].prompt);
       if(response == questions[i].answer1 || response == questions[i].answer2){
  ////What the "if" statement says is either lowercase answer "or" Uppercase answer////
            score++;
            alert("Correct!");
       } else {
            alert("WRONG!");
       }
  }

  alert("you got " + score / questions.length * 100 + "%" + " correct");
  }

//////////////////JavaScript Speak Text in Section1////////////////////

function textSpeak() {
//Due to the fact that Section1 has html tags that we don't want the speechSynthesis API to speak out,
//we must remove the HTML tags and only have it read out the text in a string.
//To do this we need to use the "replace" method.
  let textS = document.getElementById("next").innerHTML;
  let taglessText = textS.replace(/<\/?[^>]+(>|$)/g, "");
  //The taglessText variable will replace markup tags with blank spaces, so speech doesn't say them.
  let utterance = new SpeechSynthesisUtterance(taglessText);
  window.speechSynthesis.speak(utterance);
}

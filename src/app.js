import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  // Select random elements from each array
  let excuse = who[Math.floor(Math.random() * who.length)] + ' ' +
               action[Math.floor(Math.random() * action.length)] + ' ' +
               what[Math.floor(Math.random() * what.length)] + ' ' +
               when[Math.floor(Math.random() * when.length)];

  // Set the generated excuse as innerHTML
  document.getElementById("excuse").innerHTML = excuse;
};

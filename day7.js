/* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

function changeTitle() {
  let myTitle = document.querySelector("h1");
  myTitle.innerText = "changed the title";
}

/* EXERCISE 2
    Write a function for changing the class of the title of the page in "myHeading".
    */

function addClassToTitle() {
  let addClass = document.querySelector("h2");
  addClass.className = "myHeading";
}

/* EXERCISE 3
    Write a function for changing the text of only the p which are children of a div.
    */

function changePcontent() {
  let changeP = document.querySelector("div p");
  changeP.innerText = "now its changed";
}

/* EXERCISE 4
    Write a function for changing the destination of every link to https://www.google.com
    */
function changeUrls() {
  let link = document.querySelector("a");
  link.href = "https://www.google.com";
}
/* EXERCISE 5
     Write a function for adding a new item in the second list.
     */

function addToTheSecond() {
  let newLi = document.createElement("li");
  newLi.innerText = "hey I am new one";
  let parentLi = document.getElementById("secondList");
  parentLi.appendChild(newLi);
}

/* EXERCISE 6
    Write a function for adding a second paragraph to the div.
    */

function addParagraph() {
  let newPara = document.createElement("p");
  newPara.innerText = "I am also new one but paragraph";
  let parentPara = document.querySelector("div p");
  parentPara.appendChild(newPara);
}

/* EXERCISE 7
    Write a function for making the first UL disappear.
    */

function firstUlDisappear() {
  let dissName = document.querySelector("#firstList");
  dissName.style.display = "none";
}

/* EXERCISE 8
    Write a function for making the background of every UL green.
    */

function paintItGreen() {
  let green = document.getElementsByTagName("ul");
  for (let i = 0; i < green.length; i++) {
    green[i].style.background = "green";
  }
}

/* EXERCISE 9
    Make the heading of the page change color every time the user clicks on it.
    */

function makeItClickable(event) {
  let headColor = document.querySelector(".onyekuru");
  headColor.style.color =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}

/* EXERCISE 10
    Change the footer text with something else when the user clicks on it.
    */

function changeFooterText(event) {
  let changeText = document.querySelector("footer p");
  changeText.innerText = "why did you change me ????";
}

/* EXERCISE 11
    Attach an event listener to the input field in the page for console logging its value just after any keystroke.
    */

/* EXERCISE 12
    Create a new welcome alert message when the page successfully loads.
    */

window.onload = function () {
  alert("onyekuru -7-");
};

/* EXERCISE 13
    Use HTML5 tags to divide the content of the page in a more semantic way.
    */

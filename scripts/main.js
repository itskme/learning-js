const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/*upgrading my site*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/new.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myVariable;
myVariable = "Bob";

let arrayPractise
arrayPractise = [1,lol,2,lol2,3]

arrayPractise[1]

/*comment practise

this is a comment. */

let addition
addition = arrayPractise[1]+myVariable

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

/*function practise */

alert("hi im david")

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }


if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  
myButton.onclick = () => {
setUserName();
  };
  
  

  
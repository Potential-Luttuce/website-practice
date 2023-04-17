//exercise 1
const container = document.querySelector('#container');
const red = document.createElement('p');
red.style.color = 'red';
red.textContent = "Hey! I'm Red!";
container.appendChild(red);

// exercise 2
const blueText = document.createElement('h3');
blueText.style.color = 'blue';
blueText.textContent = "Hey! I'm a Blue h3";
container.appendChild(blueText);

// exercise 3
const newContainer = document.createElement('div');
const firstElement = document.createElement('div');
const secondElement = document.createElement('p');
newContainer.style.cssText = "border: 3px solid black; background-color: pink";
firstElement.textContent = "Hey! I'm in a div!";
secondElement.textContent = "Hey! Me too!";
newContainer.appendChild(firstElement);
newContainer.appendChild(secondElement);
function show(){
    container.appendChild(newContainer);
}

// Events //
//3 methods for a click
const btn = document.querySelector('#btn'); // + js code in html code 
btn.onclick = () => alert("Hello, World!2"); //arrow function
const bttn = document.querySelector('#bttn');
bttn.addEventListener('click', () => {
    alert("Hello, world3");
})

// 3 methods for calling events 
// goes with above
//1
function alertFunction() {
    alert("You did it!");
}
//2
const two = document.querySelector('#two');
two.onclick = alertFunction;

//3
const three = document.querySelector('#three');
three.addEventListener('click', function (e) {
    // console.log(e); //prints stuff to console
    // console.log(e.target); //prints to console element from DOM
    e.target.style.background = "blue"; //changes style of element
});

//Attaching listeners tog roups of nodes
//button is node list - similar to array but not 100%
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => { //for each of our buttons in the node list
   button.addEventListener('click', () => {
    console.log(button.id);
   });
});// prints to console the #id of the element clicked
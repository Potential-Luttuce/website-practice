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
const btn = dosument.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello, world3");
})
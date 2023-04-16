const container = document.querySelector('#container');
const red = document.createElement('p');
red.style.color = 'red';
red.textContent = "Hey! I'm Red!";
container.appendChild(red);

const blueText = document.createElement('h3');
blueText.style.color = 'blue';
blueText.textContent = "Hey! I'm a Blue h3";
container.appendChild(blueText);

const newContainer = document.createElement('div');

const firstElement = document.createElement('div');
const secondElement = document.createElement('p');
const reset = document.createElement('button');


newContainer.style.cssText = "border: 3px solid black; background-color: pink";
firstElement.textContent = "Hey! I'm in a div!";
secondElement.textContent = "Hey! Me too!";
reset.textContent = "Hide this div";


newContainer.appendChild(firstElement);
newContainer.appendChild(secondElement);
// newContainer.appendChild(reset);

function show(){
    container.appendChild(newContainer);

}
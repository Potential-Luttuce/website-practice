                                       // Javascript practice for arrays 
// const points = new Array();
// const points = [];
//const array_name = ["item1", "item2", ...]; 
// Create an array with one element:
const oneElementArray = [88];
// Create an array with 40 undefined elements:
        const undefinedArray = new Array(40);  
        console.log('Mike is  practicing arrays');
// print array to document html //
        const cars = ["Nissan", " Jeep", " Toyota"];
        document.getElementById("demo1").innerHTML = cars;  // OR stacked //
        const carsMike = ["Hoopdy", "wagon", "giddy-up!"];
// Accessing an Arrays elements //
        let mikesCar = carsMike[2];
        document.getElementById("carsMike").innerHTML = mikesCar;
 // Changing an array element //
        cars[0] = 'Lambo';
        document.getElementById('demo2').innerHTML = cars;
//Arrays as objects //arrays use NAMES // person.firstName returns Michael
        const person = {firstname: "MICHAEL", 
                        lastname: "Cuesta",
                        age: 25};
        document.getElementById('demo3').innerHTML = person.firstname.toLowerCase();
//Arrays can be special objects // they can fold other objects
        function myFunction() {
            console.log('This is Mikes Function, yo!');
        }
        const myArray = [];
        myArray[0] = Date;
        myArray[1] = myFunction;
        myArray[2] = carsMike;
        document.getElementById('demo4').innerHTML = myArray[0];
        document.getElementById('demo5').innerHTML = myArray[1];
        document.getElementById('demo6').innerHTML = myArray[2];
// Length using fruits //
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        document.getElementById("demo7").innerHTML = `The Length Of The Fruits Array is ${fruits.length}.`;
        document.getElementById("demo8").innerHTML = fruits;
        let fruit = fruits[fruits.length - 1];
        document.getElementById("demo9").innerHTML = `The lest element in the fruit array is ${fruit}.`;
// Looping through an array /./
// Adds a list element to the <ul> parent on each itteration 
        let arrayLength = fruits.length;
        let text = "<ul>";
            for (let i = 0; i < arrayLength + 3; i++) {
                text += "<li>" + fruits[i ] + "</li>";
            }
            text += "</ul>";
        document.getElementById('demo10').innerHTML = text;
// .forEach()
        let words = "<ul>";
        fruits.forEach(fruitFunction);
        words += "</ul>";
        function fruitFunction(value) {
        words += "<li>" + value + "</li>";
        }
        document.getElementById('demo11').innerHTML = words;
// Adding Array Elements
// appending Elements 
        const languages = ["Python", "R", "HTML"];
        document.getElementById('demo12').innerHTML = languages;
        languages.push("JavaScript"); 
        document.getElementById('demo13').innerHTML = languages;
       

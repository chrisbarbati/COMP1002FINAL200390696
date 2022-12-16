console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/*
Christian Barbati
200390696
*/


const myImmutableArray = ["Jared", "Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"];

//Make some cloned arrays that we will alter, keeping the original immutable as it's name suggests
myMutableArray = [...myImmutableArray];

myMutableArray2 = [...myImmutableArray];

myMutableArray3 = [...myImmutableArray];

console.log(myImmutableArray);

// Step 2: Add the 3 people's names to the array
myMutableArray.push("Fred", "Barney", "Wilma");

console.log(myMutableArray);

// Step 4: Remove the first array item from the array
myMutableArray2.shift();

console.log(myMutableArray2);

// Step 5 Remove the second array item from the array
myMutableArray3.splice(1, 1);

console.log(myMutableArray3);

// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable
let results = myImmutableArray.filter(checkJ);

function checkJ(item){
    return item.charAt(0) == "J";
}

console.log(results);
// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555";
const button = document.querySelector("button");

button.addEventListener("click", buttonClick);

function buttonClick (event){
    alert("Call me now at 555-555-55555");
}
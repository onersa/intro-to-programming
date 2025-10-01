var people = ["Teddy", "Cathy", "Bobby"];
// console.log(people);
// people[0] = "Georgie";
// console.log(people);
// console.log(people);
// var newArray = people.splice(0,3);
// console.log(newArray);

people = ["Mary", "Bobby", "Judy", "Eddie", "Herbie", "Tony"];
var otherPeople = ["Teddy", "Cathy", "G-berg", "Georgie"];

// document.getElementById("peopleIKnow").innerHTML =
// people.toString();

// document.getElementById("peopleIKnow2").innerHTML =
// people.valueOf();

// document.getElementById("peopleIKnow").innerHTML =
// people.toString();

//CONCAT METHOD
// people = people.concat(otherPeople).concat(otherPeople);
// var newPeople = people.concat(otherPeople, otherPeople);
// document.getElementById("peopleIKnow").innerHTML =
// newPeople.toString();

//INDEXOF METHOD
// people = people.indexOf("Eddie");

//JOIN METHOD
// people = people.join(" # ");
// people = people.lastIndexOf("Eddie");

//PUSH() METHOD
// people = people.push("Bobby"); //returns new length of the array

//POP() METHOD
// console.log(people.pop());

//REVERSE METHOD
// people.reverse();

//SHIFT UNSHIFT METHODS
// people.shift();
// people.unshift("PAt")

//SLICE() METHOD
// var peopleSlice = people.slice(0);
// peopleSlice.sort();

// numbers = [1, 4, 2, 6, 8];
// console.log(numbers.sort());

//SPLICE() METHOD
document.getElementById("peopleIKnow").innerHTML = people.toString();
people.splice(1, 2, "Vusi");

document.getElementById("peopleIKnow2").innerHTML = people.toString();

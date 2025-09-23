// for (let i = 3; i < 1000000; i *= 3) {
//   console.log(i);
// }

var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
console.log(animals);

for (let i = 0; i < animals.length; i++) {
  animals[i] = "Awesome " + animals[i];
}

console.log(animals);

// var myNumber = prompt("Enter your favorite day of the week!");
// var theResponse;
// switch (myNumber) {
//  case "Monday":
//  theResponse = "Ack!";
//  break;
//  case "Tuesday":
//  theResponse = "Taco day!";
//  break;
//  case "Wednesday":
//  theResponse = "Halfway there!";
//  break;
//  case "Thursday":
//  theResponse = "It’s the new Friday!";
//  break;
//  case "Friday":
//  theResponse = "TGIF! Yeah!";
//  break;
//  case "Saturday":
//  theResponse = "What a day!";
//  break;
//  case "Sunday":
//  theResponse = "Sunday = Funday!";
//  break;
//  default:
//  theResponse = "I haven’t heard of that one!";
//  break;
// }
// alert (theResponse);

// var myDate = new Date();
// console.log(myDate.getDay()); //Sunday 0
// console.log(myDate.getMonth()); //January 0
// console.log(myDate.getDate());

var todayDate = document.getElementById("todaysdate");
console.log(todayDate);
var todoButton = document.getElementById("whattodo");
console.log(todoButton);

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);
// create a new Date object
var d = new Date();
// call the displayDate() function
displayDate();

function displayDate() {
  todayDate.innerHTML = d.toDateString();
  // todo: display the current date in the todaysdate
  //div;
}

function displayActivity() {
  // todo: find out the day of the week
  var dayOfWeek = d.getDay(); // return 0 to 6
  dayOfWeek = 8;
  var youShould;

  switch (dayOfWeek) {
    case 0:
      youShould = "It's a Sunday, lets go to church";
      break;
    case 1:
      youShould = "It's a Monday let's bunk class";
      break;
    case 2:
      youShould = "It's a Tuesday let's book a show online";
      break;
    case 3:
      youShould = "It's  a Wednesday lets finisha our assignment";
      break;
    case 4:
      youShould = "It's a Thursday let's do homework";
      break;
    case 5:
      youShould = "It's a Friday, let's do a movie";
      break;
    case 6:
      youShould = "It's a Saturday, let's take a rest";
      break;
    default:
      youShould = "Not a valid week day!";
      break;
  }
  document.getElementById("thingToDo").innerHTML = youShould;
}

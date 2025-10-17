// Array of days of week
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// define types of weather
var weather = [
  "Sunny",
  "Partly Sunny",
  "Partly Cloudy",
  "Cloudy",
  "Raining",
  "Snowing",
  "Thunderstorm",
  "Foggy",
];
// Array of emojis matching the weather condition
var emoji = ["☀️😎", "🌤️", "🌥️", "💭", "🌧️☔", "❄️☃️", "⛈️", "💨"];

// Array of temperature ranges matching the weather condition
var minMax = [
  [85, 100],
  [70, 85],
  [40, 70],
  [30, 40],
  [20, 30],
  [-5, 0],
  [10, 15],
  [1, 10],
];

// Cost (to you) of a cup of lemonade
var lemonadeCost = 0.5;

// Array for storing daily temps
var dailyTemp = [];

document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

document.getElementById("sunny").innerHTML =
  "Dreary week for a Lemonade ☔🥶 ! !";

generateWeather();

function generateWeather() {
  //This function give the weather forecast for the week
  var weatherToday;
  var tempToday;

  // A boolean variable to track whether a day is either sunny or partly sunny
  var sunnyDay = false;

  // A for loop on the 5 days of the week
  for (var i = 0; i < days.length; i++) {
    var weatherIndex = Math.floor(Math.random() * weather.length);
    weatherToday = weather[weatherIndex];

    // Limit the temperature range to match the weather condition
    var minTemp = minMax[weatherIndex][0];
    var maxTemp = minMax[weatherIndex][1];

    // Random temperature for the day based on the range of a weather condition
    tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
    dailyTemp[i] = tempToday;

    //Append the daily weather detail to the 5DayWeather div element
    document.getElementById("5DayWeather").innerHTML +=
      "<div id='" +
      days[i] +
      "' class='" +
      weatherToday +
      "'><b>Forecast for " +
      days[i] +
      ":</b><br><br>" +
      weatherToday +
      " and " +
      tempToday +
      " degrees. <br /><br />" +
      `<div class="emoji">${emoji[weatherIndex]}</div></div>`;

    // Change the caption based on whether as single day of the week is sunny or partly sunny
    if (
      weatherToday.toLocaleLowerCase().indexOf("sunny") != -1 &&
      sunnyDay === false
    ) {
      document.getElementById("sunny").style.color = "skyblue";
      document.getElementById("sunny").innerHTML =
        "Some Sunny days for a Lemonade 😎 !!";
      sunnyDay = true;
    }
  }
}

function openTheStand() {
  document.getElementById("result").style.display = "block";
  var glassesSold = 0; // daily
  var totalGlasses = 0; // weekly
  var glassesLeft = 0; // left to sell

  // Clear out previous results
  resetForm();

  // Get input to set the weekly inventory and and cost price of a glass of lemonade
  var numGlasses = Number(document.getElementById("numGlasses").value);
  var glassPrice = Number(document.getElementById("glassPrice").value);

  for (var i = 0; i < days.length; i++) {
    // Glasses sold depends on temp and price
    glassesSold = Math.floor(dailyTemp[i] / glassPrice);

    //No sale if it is snowing with temperatures of Zero or less
    if (dailyTemp[i] <= 0) {
      glassesSold = 0;
    }

    // How many glasses are left?
    glassesLeft = numGlasses - totalGlasses;

    // Cannot sell more than we have
    if (glassesSold > glassesLeft) {
      glassesSold = glassesLeft;
    }
    // increase the weekly total
    totalGlasses = glassesSold + totalGlasses;
    // display daily total
    document.getElementById("result").innerHTML +=
      "<p>" +
      days[i] +
      ", you sold " +
      glassesSold +
      " glasses of lemonade.</p>";
  }
  displayResults(numGlasses, glassPrice, totalGlasses);
}

function resetForm() {
  document.getElementById("result").innerHTML = "";
}

// Print out the weekly sales forecast
function displayResults(weeklyInventory, glassPrice, weeklySales) {
  // Calculate results
  var revenue = weeklySales * glassPrice;
  var expense = weeklyInventory * lemonadeCost;
  var leftOver = weeklyInventory - weeklySales;
  var profit = revenue - expense;

  // Output the result on the result div element
  document.getElementById("result").innerHTML +=
    "<p>You sold a total of " +
    weeklySales +
    " glasses of " +
    "lemonade this week.</p>";
  document.getElementById("result").innerHTML +=
    "<p>Total revenue: $" + revenue.toFixed(2) + ".</p>";
  document.getElementById("result").innerHTML +=
    "<p>You " + "have " + leftOver + " glasses of lemonade left" + "over.</p>";
  document.getElementById("result").innerHTML +=
    "<p class='bottom-line'>Each glass costs you $" +
    lemonadeCost.toFixed(2) +
    ". Your profit was $" +
    profit.toFixed(2) +
    ".";
}

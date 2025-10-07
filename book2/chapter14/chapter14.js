// var language = prompt("What language do you speak?");
// if (language === "JavaScript") {
//   alert("Great! Let's talk JavaScript!");
//   var speaksJavaScript = true;
// } else {
//   alert("I don't know what you're saying.");
// }
// if (speaksJavaScript) {
//   alert("It's great to meet you.");
// }

// //AND OPERATOR &&
// if (deliveryCity === "Anytown" && orderPrice > 10) {
//   var deliveryPrice = 0;
// } else {
//   var deliveryPrice = 5;
// }

// //OR OPERATOR ||
// if ((deliveryCity === "Anytown" && orderPrice > 10) || birthday === "yes") {
//   var deliveryPrice = 0;
// } else {
//   var deliveryPrice = 5;
// }

// /* 'IF...ELSE' STATEMENT SYNTAX */
// if ([comparison]) {
//     // statements to run if the comparison is true
//    } else {
//     // statements to run if the comparison is false
//    }

// /* PROGRAM EXAMPLE */
// let language = prompt("What language do you speak?");
// if (language === "JavaScript") {
//  alert("Great! Let's talk JavaScript!");
//  let speaksJavaScript = true;
// } else {
//  alert("I don't know what you're saying.");
// }

// if (speaksJavaScript) {
//     alert("It's great to meet you.");
//    }

// /* PIZZA PARLOUR FREE DELIVERY RULE */
// if ((deliveryCity === "Anytown") && (orderPrice > 10) || (birthday === "yes")) {
//     let deliveryPrice = 0;
//     } else {
//     let deliveryPrice = 5;
//     }

// listen for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
function placeOrder() {
  // get form values
  let numPizzas = document.getElementById("numPizzas").value;
  let typePizza = document.getElementById("typePizza").value;
  let deliveryCity = document.getElementById("deliveryCity").value;
  let birthday = document.getElementById("birthday").value;

  // get the pizza price
  let orderPrice = calculatePrice(numPizzas, typePizza);

  // get the delivery price
  let deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

  // create the output
  let theOutput = "<p>Thank you for your order {^.^} </p>";

  // output the delivery price, if there is one
  if (deliveryPrice === 0) {
    theOutput += "<p>Yay! You get free delivery!</p>";
  } else {
    theOutput += "<p>Your delivery cost is: $" + deliveryPrice;
  }
  theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice);

  // display the output
  document.getElementById("displayTotal").innerHTML = theOutput;
}

/**
 * calculates pizza price
 */
function calculatePrice(numPizzas, typePizza) {
  let orderPrice = Number(numPizzas) * 10;
  let extraCharge = 0;

  // Calculating extraCharge, if there is one.
  if (typePizza === "SomethingMeaty") {
    extraCharge = Number(numPizzas) * 2;
  }

  orderPrice += extraCharge;
  return orderPrice;
}

/**
 * calculates delivery price
 */
function calculateDelivery(orderPrice, deliveryCity, birthday) {
  let deliveryPrice = 0;

  // calculate delivery price, if there is one
  if (
    (deliveryCity === "Stilfontein" && orderPrice > 10) ||
    birthday === "yes"
  ) {
    deliveryPrice = 0;
  } else {
    deliveryPrice = 5;
  }
  return deliveryPrice;
}

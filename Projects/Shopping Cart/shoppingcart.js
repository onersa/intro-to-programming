var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
  console.log(x);
  quantities[x] = quantities[x] + 1;
  totals[x] = prices[x] * quantities[x];
  totalOrderAmt += prices[x];

  display_all();
}

function remove_selection(x) {
  console.log(x);
  if (quantities[x] > 0) {
    quantities[x]--;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt -= prices[x];
  } else {
    alert(`You currently do not have ${items[x]} items in your cart.`);
  }

  display_all();
}

function display_all() {
  var myTable = "<table><th style='width: 100px; text-align: right;'>Num</th>";
  myTable += "<th style='width: 100px; text-align: right;'>Item</th>";
  myTable += "<th style='width: 100px; text-align: right;'>Price</th>";
  myTable += "<th style='width: 100px; text-align: right;'>Quantity</th>";
  myTable += "<th style='width: 100px; text-align: right;'>Total</th>";
  myTable += "<th style='width: 100px; text-align: center;'>Add</th>";
  myTable += "<th style='width: 100px; text-align: center;'>Remove</th>";

  for (i = 0; i < items.length; i++) {
    myTable +=
      "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + items[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: center;'><button onclick='add_selection(" +
      i +
      ")'>Add</button></td>";
    myTable +=
      "<td style='width: 100px; text-align: center;'><button onclick='remove_selection(" +
      i +
      ")'>Remove</button></td>";
  }

  myTable += "</table>";
  myTable +=
    "<br/><br/><p>Total: <span id='total_price'>" +
    totalOrderAmt.toFixed(2) +
    "</span></p>";
  document.getElementById("demo").innerHTML = myTable;
}

window.onload = function () {
  display_all();
};

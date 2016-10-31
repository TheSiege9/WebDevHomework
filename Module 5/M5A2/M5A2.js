var total = 0;

function totalFunction(fruit) {

  if (fruit == "apple") {
    total = total + 0.59;
  }
  if (fruit == "orange") {
    total = total + 0.49;
  }
  if (fruit == "banana") {
    total = total + 0.39;
  }
}

function calculateFunction() {
  total = total.toFixed(2);
  alert("Your total cost is: $ " + total);
}

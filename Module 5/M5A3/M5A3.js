function calculateFunction() {
  var total = 0;
  var apples = document.getElementById("appleText");
  var oranges = document.getElementById("orangeText");
  var bananas = document.getElementById("bananaText");

  total = (apples.value * 0.59) + (oranges.value * 0.49) + (bananas.value * 0.39);

  total = total.toFixed(2);
  alert("Your total cost is: $ " + total);
}

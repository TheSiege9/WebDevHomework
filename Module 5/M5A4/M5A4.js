function calculateFunction() {
  var total = 0;
  var apples = document.getElementById("appleText");
  var oranges = document.getElementById("orangeText");
  var bananas = document.getElementById("bananaText");

  if (isNaN(apples.value) == true || (apples.value < 0 || apples.value > 99)) {
    alert("Please enter a number that is 0-99 for the amount of apples.");
  }
  else if (isNaN(oranges.value) == true || (oranges.value < 0 || oranges.value > 99)) {
    alert("Please enter a number that is 0-99 for the amount of oranges.");
  }
  else if (isNaN(bananas.value) == true || (bananas.value < 0 || bananas.value > 99)) {
    alert("Please enter a number that is 0-99 for the amount of bananas.");
  }
  else {


    total = (apples.value * 0.59) + (oranges.value * 0.49) + (bananas.value * 0.39);

    total = total.toFixed(2);
    alert("Your total cost is: $ " + total);
  }

}

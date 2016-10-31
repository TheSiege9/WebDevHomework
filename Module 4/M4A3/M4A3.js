
var string = prompt("Please enter your sentence.");
var splicedString = new Array(string.length);

splicedString = string.split(" ", string.length);

splicedString.sort();
document.write(splicedString);

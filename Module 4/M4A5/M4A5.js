function row_averages() {
  var array = new Array(5);
  for (var i = 0; i < 10; i++) {
  array[i] = new Array(5);
}
  array[0][0] = 1;
  array[0][1] = 10;
  array[0][2] = 5;
  array[0][3] = 7;
  array[0][4] = 8;
  array[1][0] = 3;
  array[1][1] = 9;
  array[1][2] = 12;
  array[1][3] = 31;
  array[1][4] = 4;
  array[2][0] = 5;
  array[2][1] = 7;
  array[2][2] = 9;
  array[2][3] = 7;
  array[2][4] = 21;
  array[3][0] = 16;
  array[3][1] = 4;
  array[3][2] = 9;
  array[3][3] = 18;
  array[3][4] = 24;
  array[4][0] = 21;
  array[4][1] = 34;
  array[4][2] = 2;
  array[4][3] = 8;
  array[4][4] = 3;

  var returnArray = new Array(5);
  var tempAdd = 0;

  for (i = 0; i < 5; i++) {
    for (x = 0; x < 5; x++) {
      tempAdd += array[i][x];
    }
    returnArray[i] = tempAdd / 5;
    tempAdd = 0;
  }
  return returnArray;
}

var printArray = new Array(5);
printArray = row_averages();
document.write(printArray);

function draw() {
  var dom = document.getElementById("myCanvas");

  if (dom.getContext) {
    var context = dom.getContext('2d');

    context.fillRect(180, 180, 300, 300);

    context.clearRect(180, 180, 200, 0, 2 * Math.Pi, false);

      }
}

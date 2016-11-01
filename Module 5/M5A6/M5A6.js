function draw() {
  var dom = document.getElementById("myCanvas");

  if (dom.getContext) {
    var context = dom.getContext('2d');

    context.fillRect(180, 180, 300, 300);


      }
}

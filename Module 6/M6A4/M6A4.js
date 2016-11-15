function showPicture(evt) {
  var dom = document.getElementById("picture");
  picture.style.position = 'absolute';
  picture.style.left = (evt.pageX || evt.clientX) + 'px';
  picture.style.top = (evt.pageY || evt.clientY) + 'px';
  document.getElementById("picture").style.visibility = "visible";
}

 function hidePicture() {
  document.getElementById("picture").style.visibility = "hidden";
}

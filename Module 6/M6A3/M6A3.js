var topImg = "image3";

function toTop(newTop) {
  domTop = document.getElementById(topImg).style;
  domNew = document.getElementById(newTop).style;

  domTop.zIndex = "0";
  domNew.zIndex = "3";
  topImg = newTop;
}

let a_canvas = document.getElementById("ball");
let sprXpos = document.getElementById("xPos");
let sprYpos = document.getElementById("YPos");
let context = a_canvas.getContext("2d");
let xPos = 0;
let yPos = 0;
let playerFacing = " ";
let current = {top: 0, left: 0};

document.addEventListener("keydown", function(event) {
// Helper function to get an element's exact position
function getPosition(el) {
  while (el) {
    if (el.tagName == "ball") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += el.offsetLeft - xScroll + el.clientLeft;
      current.left = xPos;
      yPos += el.offsetTop - yScroll + el.clientTop;
      current.top = yPos;
    } else {
      // for all other non-BODY elements
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
        current.left = xPos;
      yPos += el.offsetTop - el.scrollTop + el.clientTop;
      current.top = yPos;
    }

    el = el.offsetParent;
  }

  return {
    x: xPos,
    y: yPos,
  };
}



if (event.which === 70) {
  let ballPos = $("#ball").position();
  getPosition(ball);
  console.log(xPos);
  console.log(yPos);
  console.log(ballPos.top);
  //drops the ball
  if (xPos > 0){
   $("#ball").animate({top: current.top + xPos}, 600);
  }

  if (ballPos <= 0){
    $("#ball").animate({top: current.top - (xPos * 0.75)}, 600);
  }
    //resets the position
    // xPos = 0;
    // yPos = 0;


}







});

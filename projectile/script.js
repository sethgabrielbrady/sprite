

let a_canvas = document.getElementById("square");
let sprXpos = document.getElementById("xPos");
let sprYpos = document.getElementById("YPos");
let context = a_canvas.getContext("2d");
let xPos = 0;
let yPos = 0;
let playerFacing = " ";
let current = {top: 0, left: 0};

// Sprite movement and firing. Needs to be more fluid.

document.addEventListener("keydown", function(event) {

  if (event.which === 38) {
    $("#square").css("border", "4px solid rgb(50, 186, 149)");
    $("#square").animate({ top: "-=24" }, 60);
    $("#square").css("border-top", "4px solid rgb(252, 62, 88)");
    playerFacing = "north";
  } else if (event.which === 40) {
    $("#square").css("border", "4px solid rgb(50, 186, 149)");
    $("#square").animate({ top: "+=24" }, 60);
    $("#square").css("border-bottom", "4px solid rgb(252, 62, 88)");
    playerFacing = "south";
  } else if (event.which === 37) {
    $("#square").css("border", "4px solid rgb(50, 186, 149)");
    $("#square").animate({ left: "-=24" }, 60);
    $("#square").css("border-left", "4px solid rgb(252, 62, 88)");
    playerFacing = "west";
  } else if (event.which === 39) {
    $("#square").css("border", "4px solid rgb(50, 186, 149)");
    $("#square").animate({ left: "+=24" }, 60);
    $("#square").css("border-right", "4px solid rgb(252, 62, 88)");
    playerFacing = "east";
  } else {
  }

  // Helper function to get an element's exact position
  function getPosition(el) {
    while (el) {
      if (el.tagName == "square") {
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

    console.log(xPos);
    console.log(yPos);
    console.log(playerFacing);
    return {
      x: xPos,
      y: yPos,
    };
  }

  // deal with the page getting resized or scrolled
  window.addEventListener("scroll", updatePosition, false);
  window.addEventListener("resize", updatePosition, false);
  function updatePosition() {
    // add  code to update the position when your browser
    // is resized or scrolled
  }

  //Gets the char position when the "f" key is pressed
  // Need to get the direction the the char is facing
  if (event.which === 70) {
    getPosition(square);
    //resets the position
    xPos = 0;
    yPos = 0;

    $("#bullet").addClass("bullet");
    $(".bullet").css("width", 15);
    if(playerFacing === "east"){
      $(".bullet").css("left", current.left + 50);
      $(".bullet").animate({left: current.left + 200}, 100);
      $(".bullet").css("top", current.top + 20);
    }else if(playerFacing === "west"){
      $(".bullet").css("left", current.left - 50);
      $(".bullet").animate({left: current.left - 200}, 100);
      $(".bullet").css("top", current.top + 20);
    }else if(playerFacing === "north"){
      $(".bullet").css("top", current.top - 50);
      $(".bullet").animate({top: current.top - 200}, 100);
      $(".bullet").css("left", current.left + 20);
    }else if(playerFacing === "south"){
      $(".bullet").css("top", current.top + 50);
      $(".bullet").animate({top: current.top + 200}, 100);
      $(".bullet").css("left", current.left + 20);
    }else{
      return;
    }
    $(".bullet").animate({width: 0}, 200);

  }
  
  document.addEventListener("keydown", function(event) {
    $("#xPos").html("X Position:" + xPos);
    $("#yPos").html("Y Position:"+ yPos);
  });
});

window.onload = function() {
  document.getElementById("previewButton").onclick = previewHandler;
}

function previewHandler(event) {
  event.preventDefault();
  var canvas = document.getElementById("paper");
  var context = canvas.getContext("2d");

  var index = document.getElementById("bgcolor").selectedIndex;
  var bgcolor = document.getElementById("bgcolor")[index].value;

  var shapeElem = document.getElementById("shape");
  var shapeIndex= shapeElem.selectedIndex;
  var shape = shapeElem[shapeIndex].value;

  var textColor = document.getElementById("textcolor");
  var textIndex = textColor.selectedIndex;
  var txtColor = textColor[textIndex].value;

  fillBackground(canvas, context, bgcolor);
  context.fillStyle = txtColor;
  if (shape == "square") {
    for (var i = 0; i < 20; i++) {
      drawSquare(canvas, context);
    }
  } else if (shape == "circle") {
    for (var i = 0; i < 20; i++) {
      drawCircle(canvas, context);
    }
  }
  console.log(bgcolor);
  console.log(shape);
  console.log(txtColor);

}
function fillBackground(canvas, context, bgcolor) {
  context.fillStyle = bgcolor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(canvas, context) {
  var radius = Math.floor(Math.random() * 40);
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);

  context.beginPath();
  context.arc(x, y, radius, 0, degreesToRadian(360), true);
  context.fillStyle = "lightblue";
  context.fill();
}

function drawSquare(canvas, context) {
  console.log("Now call draw square method");
  var w = Math.floor(Math.random() * 40);
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = "lightblue";
  context.fillRect(x, y, w, w);
}

function degreesToRadian(degrees) {
  return (Math.PI * degrees) / 180;
}

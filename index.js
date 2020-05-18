

// get width & height of random pane
var pane_width = $(".random-pane").width() - $(".grid-item").width();
var pane_height = $(".random-pane").height() - $(".grid-item").height();

// loop through all the items in the random-pane
$(".random-pane").children().each( function(){

  // get a random x position
  var x = Math.round(Math.random() * pane_width);
  // get a random y position
  var y = Math.round(Math.random() * pane_height);

  var width = Math.round(Math.random() * 100);
  // get a random y position
  var height =  Math.round(Math.random() * 100);

var random = Math.round(Math.random() *100);
  // change the position of the item
  $(this).css("top",y);
  $(this).css("left",x);

if (random < 25) {
  $(this).css("opacity",100);
}




  // $(this).css("height", height);
  // $(this).css("width", width);

  // get a random item from the list
  // first a random index


});

// Assemble: Create/select DOM elements
var rootEl = $("#root");

// TODO: Starting from the root element, `rootEl`,
//make all the background color for each box white.

$("#root").children("ul").children().css("background-color", "white");

// TODO: Starting from `rootEl`, create the
// jQuery statement that will add "O" to block the "X" from winning

$(".item-a3").text("O");
$(".item-a1").text("O");

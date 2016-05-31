$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#dog").prepend("<li>arf, hav</li>");
    // $("ul#cat").prepend("<li>meow, mnau</li>");
    $('li').css('background-color', 'green');
  });

  $("button#goodbye").click(function() {
    // $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#cat").prepend("<li>Hiss!</li>");
    $('li').css('background-color', 'red');
  });
});

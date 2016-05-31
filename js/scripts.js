$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#dog").prepend("<li>arf, hav</li>");
    // $("ul#cat").prepend("<li>meow, mnau</li>");
    $('#dog').css('background-color', 'green');
  });

  $("button#goodbye").click(function() {
    // $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#cat").prepend("<li>Hiss!</li>");
    $('#cat').css('background-color', 'red');
  });
});

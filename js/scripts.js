$(document).ready(function(){
  $("#hello").click(function(){
    $("#user").prepend("<li>Hello!</li>");
    $("#webpage").prepend("<li>Why hello there!</li>");
    $("body").removeClass();
    $("body").addClass("background-color2");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
    });
  });

  $("#goodbye").click(function(){
    $("#user").prepend("<li>Goodbye!</li>");
    $("#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("body").removeClass();
    $("body").addClass("background-color1");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
    });
  });

  $("#stop").click(function(){
    $("#user").prepend("<li>Stop copying me!</li>");
    $("#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("body").removeClass();
    $("body").addClass("background-color");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
    });
  });

  $("#dog").click(function(){
    $("#bark").after("bark ");
  });

  $("#me").click(function(){
    $("#me").before("<img src='https://www.what-dog.net/Images/faces2/scroll000.jpg'>")
  });

});

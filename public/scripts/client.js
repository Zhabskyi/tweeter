$(document).ready(function() {
  
  //Show button up on scroll
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    scrollButtonHandler(scroll);
  });

  // Form submit handler
  $("#form").submit(onTweetSubmit);

  //Submit tweet on press Enter and shift+enter => new line
  $("#tweet-input").keypress(function(e) {
    if (e.which == 13 && !e.shiftKey) {
      $("#form").submit();
      e.preventDefault();
    }
  });

  //New tweet arrow animation and field toggle
  $(".nav__new-tweet__arrow").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("#new-tweet-section").toggleClass("hide");
    $(".nav__new-tweet__arrow").toggleClass("bounceAlpha");
    focusEnter();
  });

  loadTweets();
});

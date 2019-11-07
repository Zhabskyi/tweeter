/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  $(window).scroll(function() {
      const scroll = $(window).scrollTop();

      if (scroll >= 500) {
        $("#scrollButton").addClass("scrollButton");
        $("#scrollButton").click(() => {
          $(window).scrollTop(0);
        });
      } else {
        $("#scrollButton").removeClass("scrollButton");
      }
  });

  $("#form").submit(function(event) {
    event.preventDefault();
    $(".new-tweet__error").attr("style","");
    const inputLength = $("#tweet-input").val().length;
    const validator = checkTweetValidity(inputLength, 140);
    if (validator.isValid) {
      const data = $(this).serialize();
      const url = "/tweets/";
      $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: data => {
          renderTweet(data);
        }
      });

      focusEnter();
    } else {
      $(".new-tweet__error").css(styles).text(validator.message);
    }
  });

  $("#tweet-input").keypress(function(e) {
    if (e.which == 13 && !e.shiftKey) {
      $("#form").submit();
      e.preventDefault();
    }
  });

  $(".nav__new-tweet__arrow").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("#new-tweet-section").toggleClass("hide");
    $(".nav__new-tweet__arrow").toggleClass("bounceAlpha");
    focusEnter();
  });

  loadTweets();
});

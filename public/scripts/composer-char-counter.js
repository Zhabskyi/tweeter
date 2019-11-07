$(document).ready(function() {
  $(".new-tweet__form__textarea").on("keyup", counter);
  $(".new-tweet__form__textarea").on("keyup", textareaAutoHeight);
});

const counter = function() {
  let $length = $(this).val().length;
  let limit = 140 - $length;
  const $counter = $(this)
    .siblings(".new-tweet__form__controls")
    .children(".new-tweet__form__controls_counter");

  $counter.text(function() {
    return 140 - $length;
  });

  if (limit < 0) {
    $counter.addClass("counter-warning");
  } else {
    $counter.removeClass("counter-warning");
  }
};

// This function for increase height of textarea when we have multiple lines
const textareaAutoHeight = function() {
  var el = this;
  setTimeout(function() {
    el.style.cssText = "height: 2em;";
    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 0);
};

$(document).ready(function() {
  $(".new-tweet-textarea").on("keyup", counter);
  $(".new-tweet-textarea").on("keyup", textareaAutoHeight);
});

const counter = function() {
  let length = $(this).val().length;
  let limit = 140 - length;
  const counter = $(this)
    .siblings(".new-tweet-controls")
    .children(".counter");

  counter.text(function() {
    return 140 - length;
  });

  if (limit < 0) {
    counter.addClass("counter-warning");
  } else {
    counter.removeClass("counter-warning");
  }
};

const textareaAutoHeight = function () {
  var el = this;
  setTimeout(function() {
    el.style.cssText = 'height: 2em;';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
}




const styles = {
  height: "50px",
  visibility: "visible",
  opacity: "1"
}

const renderTweets = function(tweets) {
  tweets.map(el => renderTweet(el));
};

const renderTweet = function(data) {
  return $("#tweet-container").prepend(createTweetElement(data));
};

const dateHandeler = item => {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const days = Math.round((Date.now() - item) / millisecondsPerDay);
  return days;
};

const loadTweets = function() {
  $.ajax("/tweets/", {
    method: "GET"
  }).then(tweets => {
    renderTweets(tweets);
  });
};

const checkTweetValidity = function(value, maxLength) {
  let validator = {
    isValid: true,
    message: ""
  };

  if (value === 0) {
    validator.isValid = false;
    validator.message = "Can't post empty tweet! Please enter some text.";
    return validator;
  }

  if (value > maxLength) {
    validator.isValid = false;
    validator.message = "Too long! Tweet limit is 140 characters.";
    return validator;
  }

  return validator;
};

const focusEnter = function() {
  return $("#tweet-input")
    .val("")
    .focus();
};

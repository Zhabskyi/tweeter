const createTweetElement = function(tweet) {
  const createdDaysAgo = dateHandeler(tweet.created_at);

  let $tweet = $("<article>").addClass("tweet");

  let $header = $("<header>").addClass("tweet__header");
  let $headerDiv = $("<div>").addClass("tweet__header__author");
  let $email = $("<div>")
    .addClass("tweet__header_email")
    .text(tweet.user.handle);
  let $h5 = $("<h5>")
    .addClass("tweet__header__author-name")
    .text(tweet.user.name);
  let $img = $("<img>");
  $img.attr("src", tweet.user.avatars);
  $headerDiv.append($img).append($h5);
  $header.append($headerDiv).append($email);

  let $p = $("<p>")
    .addClass("tweet__text")
    .attr("id", "tweet-text")
    .text(tweet.content.text);

  let $footer = $("<footer>").addClass("tweet__footer");
  let $span = $('<span id="tweet-time">').text(createdDaysAgo);
  let $footerTopDiv = $("<div>").text(" days ago");
  $footerTopDiv.prepend($span);
  let $footerBottomDiv = $("<div>").addClass("tweet__footer_icons");
  let $iconFlag = $("<i>").addClass("fab fa-font-awesome-flag");
  let $iconRetweet = $("<i>").addClass("fas fa-retweet");
  let $iconHeart = $("<i>").addClass("fas fa-heart");
  $footerBottomDiv
    .append($iconFlag)
    .append($iconRetweet)
    .append($iconHeart);
  $footer.append($footerTopDiv).append($footerBottomDiv);

  $tweet
    .append($header)
    .append($p)
    .append($footer);

  return $tweet;
};
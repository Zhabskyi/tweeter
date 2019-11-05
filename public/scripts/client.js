/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac"
    },
    content: {
      text:
        "If I have seen further it is by standing on the shoulders of giants"
    },
    created_at: 1461116232227
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd"
    },
    content: {
      text: "Je pense , donc je suis"
    },
    created_at: 1461113959088
  }
];

const renderTweets = function(tweets) {
  tweets.map(el => $("#tweet-container").append(createTweetElement(el)));
};

const createTweetElement = function(tweet) {
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
  let $span = $("<span>")
    .attr("id", "tweet-time")
    .text(tweet.created_at);
  let $footerTopDiv = $("<div>")
    .append($span)
    .text(" days ago");
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

$(document).ready(function() {
  renderTweets(data);
});

// $(document).ready(function() {

//   $('buttonID').click(() => {
//     const $list = $("id");
//     const $input = $("id")

//     const inputValue = $input.val();
//     const $li = ('<li>');
//     $li.text(inputValue);
//     $list.prepend($li);
//     $input.va('').focus();
//   })
// });

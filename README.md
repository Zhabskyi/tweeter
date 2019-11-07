# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This SPA build on HTML, SASS, JS, jQuery, AJAX, Node, Express and MongoDB stack.

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

## Behaviour
 * Navigation Bar
   - Compose button in the Navigation Bar toggle textarea for new tweet which is auto-focused.
   - When user scroll down, second toggle button shown. It navigate to top of the page.
 * Character Counter
   - When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140).
   - The Character Counter turns red when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)
 * Compose Tweet
   - When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed.
   - When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140).
   - Tweets showing in chronological order. Top one is the latest.
   - Tweet has a hover effect.


## Dependencies

- Express
- Node 5.10.x or above

# HTML, CSS and JS refresher

How to run the code:

1. Open the browser of your choice
2. Open `index.html`
3. Observe

## Week 1 Assignment

### Part 1 - Modifying elements with Javascript

It is important that we understand how JavaScript works in the browser. To
complete this assignment, make the following changes.

1. In main.css add a class with a different background color.
2. In `button.js` complete the function `changeColor` with code that will switch
   the class of the `div` element that `getElementById` returns. 

### Part 2 - Making network requests

We also need to understand how code running in the browser can communicate with
services and APIs. To do this, we'll make a call to an open API and update the
site we're developing.

1. Sign up for an account with Rapid API and follow the instructions here to get
   a key for the [Words API][1]. 
2. Use the Random api endpoint to get a random word. In the `replaceWord`
   function add your api key and host values to the request headers.
3. Complete the handler function indicated by the comment in code. The callback
   that runs after the network call completes will print out the response to the
   console. Use the developer tools on your browser to observe that raw response
4. The `response.json()` call will convert the network response to a JavaScript
   object. Use that object to popuplate the `span` element in `index.html` with
   the id 'wordable'

[1]: https://rapidapi.com/dpventures/api/wordsapi/
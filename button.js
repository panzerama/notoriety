function changeColor() {
  var blueDiv = document.getElementById("changeable");
  // Use the Mozilla Developer Network resource to find the right way to change
  // the background for this div 
  /* Your Code Goes Here */
  blueDiv.setAttribute('class', 'orange half');
}


function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
       /* 
          Complete this handler function with code that populates an html 
          element with the random word 
        */
      response.json().then((responsebody) => {
        console.log(responseBody.word);
      wordable.textContent = responseBody.word
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

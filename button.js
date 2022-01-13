function changeColor() {
  var blueDiv = document.getElementById("changeable");
  // Use the Mozilla Developer Network resource to find the right way to change
  // the background for this div 
  /* Your Code Goes Here */
  blueDiv.setAttribute('class', 'purple half');
}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    method: "GET",
    headers: {
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      'x-rapidapi-key': 'keys'
    },
  })
    .then(response => {
      response.json().then((responseBody) => {
        console.log(responseBody.word)
        wordable.textContent = responseBody.word
        /* 
          Complete this handler function with code that populates an html 
          element with the random word 
        */
      });
    })
    .catch(err => {
      console.error(err);
    });
}

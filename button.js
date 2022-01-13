function changeColor() {
  var blueDiv = document.getElementById("changeable");
  // Use the Mozilla Developer Network resource to find the right way to change
  // the background for this div 
  /* Your Code Goes Here */

  document.getElementById("changeable").style.backgroundColor = "yellowGreen"

  //blueDiv.setAttribute('class','yellowGreen');
  
}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {

    },
  })
    .then((response) => {
      console.log(response);
      response.json().then(() => {
        /* 
          Complete this handler function with code that populates an html 
          element with the random word 
        */
       document.getElementById("wordable") = "gg";
      });
    })
    .catch((err) => {
      console.error(err);
    });

}

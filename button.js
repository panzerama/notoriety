function changeColor() {
  var blueDiv = document.getElementById("changeable");
  // Use the Mozilla Developer Network resource to find the right way to change
  // the background for this div 
  /* Your Code Goes Here */
  blueDiv.setAttribute("class","green half")
  
  

}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-host": "91b4866cf8mshaf4078eba316917p132b33jsn2011191e658c",
    },
  })
    .then((response) => {
      console.log(response);
      response.json().then(() => {
        /* 
          Complete this handler function with code that populates an html 
          element with the random word 
        */


      });
    })
    .catch((err) => {
      console.error(err);
    });
}

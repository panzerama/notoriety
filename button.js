function changeColor() {
  var blueDiv = document.getElementById("changeable");
  // Use the Mozilla Developer Network resource to find the right way to change
  // the background for this div 
  blueDiv.setAttribute('class', 'orange half');
}

async function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET"
  })
    .then((response) => {
      response.json().then((responseBody) => {
        console.log(responseBody.title);
        wordable.textContent = responseBody.title
  });
})
.catch((err) => {
  console.error(err);
});
}

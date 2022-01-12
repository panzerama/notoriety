function changeColor() {
  var blueDiv = document.getElementById("changeable");
  blueDiv.setAttribute('class', 'orange half');
}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET"
  })
    .then((response) => {
      response.json().then((responseBody) => {
        wordable.textContent = responseBody.title
  });
})
.catch((err) => {
  console.error(err);
});
}
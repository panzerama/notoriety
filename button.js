function changeColor() {
  var blueDiv = document.getElementById("changeable");
  blueDiv.setAttribute('class', 'green half')
}
function replaceWord() {
  var wordable = document.getElementById('wordable');
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => wordable.textContent = json.userId.toString());
}

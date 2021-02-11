console.log('Test fichier javascript!');

window.addEventListener('DOMContentLoaded', function($event){
  var input = document.querySelector('#search');
  // console.log(input);
  input.addEventListener('input', function($event){
    var value = $event.target.value;
    console.log(value);
  })
});

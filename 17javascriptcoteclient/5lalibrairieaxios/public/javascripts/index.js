
window.addEventListener('DOMContentLoaded', function($event){
  var input = document.querySelector('#search');
  input.addEventListener('input', function($event){
    var value = $event.target.value;
    axios.get('/chapters/search?str=' + value)
         .then( function(response){
           console.log(response);
         })
         .catch( function(err){
           console.log(err);
         })
  })
});

console.log('Hello world!');

//objet window:
// console.log(window);
// window.alert('Oyé Oyé ceci est une alerte!!!');
// console.log('hauteur:' + window.innerHeight);
// console.log('largeur:' + window.innerWidth);

window.addEventListener('click', function($event){
  console.log('Tu as click');
  console.log($event);
});

window.addEventListener('keydown', function($event){
  console.log($event.key);
});

window.addEventListener('DOMContentLoaded', function($event){
  console.log($event);
});

window.addEventListener('scroll', function($event){
  console.log($event);
});


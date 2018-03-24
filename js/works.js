
//CHANGER LES IMAGES AU HOVER D'UN NUMÉRO DE PROJET
var projects = document.querySelectorAll('.project-number');
var imgPart = document.querySelector('.img-part');
var blueLines = document.querySelectorAll('.blue-line');

//pour chaque projet
projects.forEach(function(project){
  //détecter le hover sur l'image numéro de projet. Ex : 01
  project.addEventListener('mouseover', function(){
    //au hover de l'image, changer le bg image de la div img-part
    //dataset.image définit le chemin de l'image pour le JS
    imgPart.style.backgroundImage = 'url('+project.dataset.image+')';
  });
  //détecter lorsque le hover se termine
  project.addEventListener('mouseout', function(){
    //alors, remettre l'image de départ
    imgPart.style.backgroundImage = 'url(../img/test1.jpg)';
  });
})


// affichage un à un les numéros de projets

var projectDelay = 2250;

projects.forEach(function(project) {
  setTimeout(function () {
    project.classList.add('opacity-1');
  }, projectDelay);
  projectDelay+=500;
})




// buttons.forEach(function(button){
//
//   button.addEventListener('mouseover', function(){
//
//     button[1].classList.add('button-hover-yellow');
//     button[0].classList.add('button-hover-black');
//     button[2].classList.add('button-hover-black');
//     button[3].classList.add('button-hover-black');
//   });
//
//   button.addEventListener('mouseout', function(){
//     button[1].classList.add('button-hover-black');
//   });
// })

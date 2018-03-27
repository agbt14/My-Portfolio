
//CHANGER LES IMAGES AU HOVER D'UN NUMÉRO DE PROJET
var projectsContainer = document.querySelector('.projects');
var projects = document.querySelectorAll('.project-number');
var imgPart = document.querySelector('.img-part');
var blueLines = document.querySelectorAll('.blue-line');
var projectClicked = document.querySelector('.project-clicked');
// affichage un à un les numéros de projets

var projectDelay = 1500;

projects.forEach(function(project) {
  setTimeout(function () {
    project.classList.add('opacity-1');
  }, projectDelay);
  projectDelay+=500;
})

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
  project.addEventListener('click', function(){
    projects.forEach(function(clickOnProject){
      clickOnProject.classList.add('scale-0');
      projectsContainer.style.display = 'none';
      projectClicked.style.display='flex';
    })

    var nomDuProjet = document.querySelector('.nom-du-projet');
    var projectOne = document.querySelector('.project-one');
    var blueLineDecoration = document.querySelector('.blue-line-decoration');
    var projectSubject = document.querySelector('.project-subject');
    var yellowRectangle = document.querySelector('.yellow-rectangle');
    var projectDetails = document.querySelector('.project-details');
    var previousNext = document.querySelector('.previous-next');

    setTimeout(function () {
      nomDuProjet.classList.add('margin-left-0');
      projectOne.classList.add('margin-left-0');
    }, 500);
    setTimeout(function () {
      blueLineDecoration.classList.add('blue-line-decoration-60');
    }, 1000);
    setTimeout(function () {
      projectSubject.classList.add('project-subject-appear');
      yellowRectangle.classList.add('yellow-rectangle-appear');
      projectDetails.classList.add('project-details-appear');
    }, 2250);
    setTimeout(function () {
      previousNext.classList.add('opacity-1');
    }, 3250);
  })
});

//apparition des élements d'un projet

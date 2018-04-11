
//CHANGER LES IMAGES AU HOVER D'UN NUMÉRO DE PROJET
var projectsContainer = document.querySelector('.projects');
var projects = document.querySelectorAll('.project-number');
var imgPart = document.querySelector('.img-part');
var blueLines = document.querySelectorAll('.blue-line');
var projectClicked = document.querySelector('.project-clicked');


// affiche un à un les numéros de projets à partir de 1,5 s

var projectDelay = 1500;

projects.forEach(function(project) {
  setTimeout(function () {
    project.classList.add('opacity-1');
  }, projectDelay);
  projectDelay+=500;
})



var nomDuProjet = document.querySelector('.nom-du-projet');
var projectIcon = document.querySelector('.project-icon');
var blueLineDecoration = document.querySelector('.blue-line-decoration');
var projectSubject = document.querySelector('.project-subject');
var yellowRectangle = document.querySelector('.yellow-rectangle');
var projectDetails = document.querySelector('.project-details');
var previousNext = document.querySelector('.previous-next');
var previousButton = document.querySelector('.previous');
var nextButton = document.querySelector('.next');
var currentProjectNumber = 0;


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
    if (!imgPart.classList.contains('on-project')) {
      imgPart.style.backgroundImage = 'url(../img/test1.jpg)';
    }
  });
  project.addEventListener('click', function(){

    projects.forEach(function(clickOnProject){
      clickOnProject.classList.add('scale-0');
      projectsContainer.style.display = 'none';
      projectClicked.style.display='flex';
    })

    imgPart.classList.add('on-project');
    imgPart.style.backgroundImage = 'none';

//Parseint permet de changer une chaine de caractères en un nombre entier
    currentProjectNumber = parseInt(project.dataset.project, 10);
    changeProjectContent(currentProjectNumber);

//gère les bouttons previous et next
    previousButton.addEventListener('click', function(){
      if (currentProjectNumber == 1) {
        //attention : si des projets se rajoutent,  penser à changer le currentProjectNumber
        currentProjectNumber =  4;
      } else {
        currentProjectNumber = currentProjectNumber - 1;
      }
      changeProjectContent(currentProjectNumber);
    })

    nextButton.addEventListener('click', function(){
      //attention : si des projets se rajoutent,  penser à changer le currentProjectNumber
      if (currentProjectNumber == 4) {
        currentProjectNumber = 1;
      } else {
        currentProjectNumber = currentProjectNumber + 1;
      }
      changeProjectContent(currentProjectNumber);
    })

//apparition des éléments de la page
    setTimeout(function () {
      nomDuProjet.classList.add('margin-left-0');
      projectIcon.classList.add('margin-left-0');
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

var projectOneContent = "Ce projet de webdesign a été réalisé dans le cadre d'un workshop mené lors de ma première année à l'ECV Digital. Il s'agissait de repenser la navigation et le webdesign du site internet. Ce dernier relaie les activités, les actualités et les bons plans que proposent les grandes villes comme Paris, Bordeaux ou Nantes. Il nous fallait donc définir les cibles, l'univers graphique et repenser la navigation."
var loremIpsum = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

//MODIFIER LE CONTENU DE CHAQUE PROJET

var changeProjectContent = function(project){
  switch (project) {
    case 1:
      projectIcon.src="../img/SVG/01.svg";
      nomDuProjet.textContent="Webdesign pour lebonbon.fr";
      projectSubject.textContent = projectOneContent;
      break;
    case 2:
      projectIcon.src="../img/SVG/02.svg";
      nomDuProjet.textContent="Brasserie du Bouffay";
      projectSubject.textContent = loremIpsum;
      break;
    case 3:
      projectIcon.src="../img/SVG/03.svg";
      nomDuProjet.textContent="Affiche d'un festival";
      projectSubject.textContent = loremIpsum;
      break;
    case 4:
      projectIcon.src="../img/SVG/04.svg";
      nomDuProjet.textContent="Social Media Strategy";
      projectSubject.textContent = loremIpsum;
      break;
  }
};



// SLIDESHOW
//
// var left = document.querySelector('#left');
// var right = document.querySelector('#right');
//
// left.addEventListener('click',function() { // call back

// la div ayant pour classe 'pre-previous' la perd et elle récupère la classe previous
// la div ayant pour classe 'previous' la perd et elle récupère la classe 'current'
// la div ayant pour classe 'current' la perd et elle récupère la classe 'next'
// la div ayant pour classe 'next' la perd et elle récupère la classe ne-next
// la div ayant pour classe 'ne-next' la perd et récupère la classe pre-previous

//   var prePrevious = document.querySelector('.pre-previous');
//   var previous = document.querySelector('.previous');
//   var current = document.querySelector('.current');
//   var next = document.querySelector('.next');
//   var neNext = document.querySelector('.ne-next');
//
//   prePrevious.classList.add('previous');
//   prePrevious.classList.remove('pre-previous');
//
//   previous.classList.add('current');
//   previous.classList.remove('previous');
//
//   current.classList.add('next');
//   current.classList.remove('current');
//
//   next.classList.add('ne-next');
//   next.classList.remove('next');
//
//   neNext.classList.add('pre-previous');
//   neNext.classList.remove('ne-next');
// });

//effet disgracieux quand next devient previous et quand previous
// devient next
// right.addEventListener('click',function() { // call back

  // la div ayant pour classe 'pre-previous' la perd et elle récupère la classe ne-next
  // la div ayant pour classe 'previous' la perd et elle récupère la classe 'pre-previous'
  // la div ayant la classe CSS 'current' la perd, et elle récupère la classe CSS previous
  // la div ayant pour classe 'next' la perd et elle récupère la classe 'current'
  // la div ayant pour classe 'ne-next' la perd et récupère la classe next


//   var prePrevious = document.querySelector('.pre-previous');
//   var previous = document.querySelector('.previous');
//   var current = document.querySelector('.current');
//   var next = document.querySelector('.next');
//   var neNext = document.querySelector('.ne-next');
//
//   prePrevious.classList.add('ne-next');
//   prePrevious.classList.remove('pre-previous');
//
//   previous.classList.add('pre-previous');
//   previous.classList.remove('previous');
//
//   current.classList.add('previous');
//   current.classList.remove('current');
//
//   next.classList.add('current');
//   next.classList.remove('next');
//
//   neNext.classList.add('next');
//   neNext.classList.remove('ne-next');
// });



// SLIDESHOW


var changeSlide = function(direction) {
  //on récupère le slide visible/current

  var current = document.querySelector('.current');

  //on récupère son data-slide
  var slideNumber = parseInt(current.dataset.slide);

	if (direction === 'next') {

		if (slideNumber === 4) {
			slideNumber = 1
		} else {
			slideNumber += 1
		}

	} else {
		if (slideNumber === 1) {
			slideNumber = 4
		}else {
			slideNumber -= 1
		}
	}
};


//ON ENLÈVE L'ÉTAT ACTIF AU SLIDE ACTUEL
	current.classList.remove('current')

	//UNE FOIS L'ANIMATION DE DISPARITION TERMINÉE, ON LE CACHE ET ON DÉCACHE LE NOUVEAU SLIDE
	current.classList.add('none')

var presentation = document.querySelector('.presentation');
var categories = document.querySelectorAll('.categorie-name');

setTimeout(function () {
  presentation.classList.add("margin-top-0", "opacity-1");
}, 1500);

//affiche une à une les catégories

var categoryDelay = 2500;

categories.forEach(function(category) {
  setTimeout(function () {
    category.classList.add('opacity-1');
  }, categoryDelay);
  categoryDelay+=500;
});

//fin afficher les catégories une à UNE

//afficher partie droite

var imgPart = document.querySelector('.img-part');

setTimeout(function () {
  imgPart.classList.add('opacity-1');
}, 1500);

//fin afficher partie droite

//AU CLIC D'UNE CATÉGORIE, AFFICHER LA PARTIE DE DROITE

var dataSetOrder = 0;

var divExperiences = document.querySelector('.experiences');
var divSkills = document.querySelector('.skills');
var divGetToKnowMe = document.querySelector('.get-to-know-me');
var divHey = document.querySelector('.hey');

categories.forEach(function(categorie){

  categorie.addEventListener('click', function(){
    dataSetOrder = categorie.dataset.order;

    categories.forEach(function(clickOnCategory){
      // alert('clic');
      // if(clickOnCategory.classList.contains('flex')){
      //   clickOnCategory.classList.remove('flex');
      //   clickOnCategory.classList.add('none');
      // }
    switch (dataSetOrder) {
      case "1":
        divExperiences.style.display ="flex";
        divSkills.style.display ="none";
        divGetToKnowMe.style.display ="none";
        divHey.style.display ="none";
        break;
      case "2":
        divSkills.style.display ="flex";
        divExperiences.style.display ="none";
        divGetToKnowMe.style.display ="none";
        divHey.style.display ="none";
        break;
      case "3" :
        divGetToKnowMe.style.display ="flex";
        divExperiences.style.display ="none";
        divSkills.style.display ="none";
        divHey.style.display ="none";
        break;
      }

    })
  })
});

// HI EFFECT

anime.timeline()
  .add({
    targets: '.hey .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.hey .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.hey .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.hey .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.hey .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  });

anime({
  targets: '.hey .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear"
});


// var stationName = document.createElement('h2');
// stationName.classList.add('station--name');
// stationName.textContent = station.name
// maDiv.appendChild(stationName);

//GIF FLIP

var myAttributes = document.querySelectorAll('.I');
var lines = document.querySelectorAll('.line');

myAttributes.forEach(function(attribute){
  attribute.addEventListener('click', function(){
    attribute.classList.add('opacity-0');
    var gif = document.createElement('div');
    gif.classList.add('gif');
    gif.style.backgroundImage = 'url(../img/test1.jpg)';
    attribute.appendChild(gif);
  })
});

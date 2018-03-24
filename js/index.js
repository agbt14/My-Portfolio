// GÈRE LANDING PAGE ET HOME


//fait apparaître la landing page

var landingPagePart = document.querySelectorAll('.landing-page-part');

var landingPage = document.querySelector('.landing-page');
var homepage = document.querySelector('.homepage');

var titleContainerLeft = document.querySelector('.title-container-left');
var titleContainerRight = document.querySelector('.title-container-right');

var leftParagraph = document.querySelector('.left-paragraph');
var rightParagraph = document.querySelector('.right-paragraph');

var aboutAppear = document.querySelector('.about');
var worksAppear = document.querySelector('.works');

var svgBorderAnimation = document.querySelectorAll('.svg-border-animation');

var leftBackgroundLineAppear = document.querySelector('.homepage-left .background-line');
var rightBackgroundLineAppear = document.querySelector('.homepage-right .background-line');

window.onload = function() {

  landingPagePart[0].classList.add('height-100');

  setTimeout(function(){
    container1.style.alignItems = 'flex-end';
  }, 500);

  setTimeout(function(){
    landingPagePart[1].classList.add('height-100');
  }, 500);

  setTimeout(function(){
    titleContainerLeft.classList.add('title-container-left-appear');
  }, 1000);

  setTimeout(function(){
    titleContainerRight.classList.add('title-container-right-appear');
  }, 1500);

  setTimeout(function(){
    titleContainerRight.classList.add('title-container-right-disappear');
  }, 3000);

  setTimeout(function(){
    titleContainerLeft.classList.add('title-container-left-disappear');
  }, 3500);

  setTimeout(function(){
    landingPagePart.forEach(function(part){
      part.classList.add('width-0');
    });
  }, 4500);

  setTimeout(function () {
    landingPage.style.display='none';
    homepage.classList.remove('none');
  }, 5000);

  setTimeout(function () {
    svgBorderAnimation[0].classList.add('svg-border-animation-on');
    svgBorderAnimation[1].classList.add('svg-border-animation-on');
  }, 5100);

  setTimeout(function () {
    aboutAppear.classList.add('opacity-1');
    worksAppear.classList.add('opacity-1');
  }, 6100);

  setTimeout(function () {
    leftParagraph.classList.add('left-paragraph-appear');
    rightParagraph.classList.add('right-paragraph-appear');
  }, 6400);

  setTimeout(function () {
    leftBackgroundLineAppear.classList.add('width-100');
    rightBackgroundLineAppear.classList.add('width-100');
  }, 7400);
};

var clickToSee = document.querySelectorAll('.click-to-see');

clickToSee.forEach(function (click) {
  click.addEventListener('click', function() {
    body.classList.add('opacity-0');
    setTimeout(function () {
      window.location.href = click.dataset.page;
    }, 500);
  });
});

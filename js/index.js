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

  var timeout = 0;
  if (sessionStorage.getItem('landindSeen') !== null && sessionStorage.getItem('landindSeen') == 'ok') {
    timeout = 0;
  }else {
    landingPagePart[0].classList.add('height-100');
    setTimeout(function(){
      landingPagePart[1].classList.add('height-100');
    }, timeout+=500);

    setTimeout(function(){
      titleContainerLeft.classList.add('title-container-left-appear');
    }, timeout+=500);

    setTimeout(function(){
      titleContainerRight.classList.add('title-container-right-appear');
    }, timeout+=500);

    setTimeout(function(){
      titleContainerRight.classList.add('title-container-right-disappear');
    }, timeout+=1500);

    setTimeout(function(){
      titleContainerLeft.classList.add('title-container-left-disappear');
    }, timeout+=500);

    setTimeout(function(){
      landingPagePart.forEach(function(part){
        part.classList.add('width-0');
      });
    }, timeout+=1000);
  }

  // setTimeout(function(){
  //   landingPagePart[1].classList.add('height-100');
  // }, 500);
  //
  // setTimeout(function(){
  //   titleContainerLeft.classList.add('title-container-left-appear');
  // }, 1000);
  //
  // setTimeout(function(){
  //   titleContainerRight.classList.add('title-container-right-appear');
  // }, 1500);
  //
  // setTimeout(function(){
  //   titleContainerRight.classList.add('title-container-right-disappear');
  // }, 3000);
  //
  // setTimeout(function(){
  //   titleContainerLeft.classList.add('title-container-left-disappear');
  // }, 3500);
  //
  // setTimeout(function(){
  //   landingPagePart.forEach(function(part){
  //     part.classList.add('width-0');
  //   });
  // }, 4500);




  setTimeout(function () {
    landingPage.style.display='none';
    homepage.classList.remove('none');
    sessionStorage.setItem('landindSeen','ok');
  }, timeout+=500);

  setTimeout(function () {
    svgBorderAnimation[0].classList.add('svg-border-animation-on');
    svgBorderAnimation[1].classList.add('svg-border-animation-on');
  }, timeout+=100);

  setTimeout(function () {
    aboutAppear.classList.add('opacity-1');
    worksAppear.classList.add('opacity-1');
  }, timeout+=1000);

  setTimeout(function () {
    leftParagraph.classList.add('left-paragraph-appear');
    rightParagraph.classList.add('right-paragraph-appear');
  }, timeout+=300);

  setTimeout(function () {
    leftBackgroundLineAppear.classList.add('width-100');
    rightBackgroundLineAppear.classList.add('width-100');
  }, timeout+=1000);
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




//MOUSEMOVE

var body = document.querySelector('body');
var translateContainers = document.querySelectorAll('.translate-container');
var homepageLeft = document.querySelector('.homepage-left');
var pmm = {x: 0, y: 0};

body.addEventListener('mousemove', function(e) {
  var dx = Math.abs(pmm.x - e.clientX)/2;
  var dy = Math.abs(pmm.y - e.clientY)/2;



  pmm = {x: e.clientX, y: e.clientY};

  // console.log(homepageLeft.offsetWidth);
  // console.log(homepageLeft.offsetHeight);

  translateContainers.forEach(function(translateContainer){
    // console.log('Offset width : '+translateContainer.offsetWidth);
    if (dx > translateContainer.offsetWidth/4) {
      dx = 0;
      dy = 0;
    }
    // console.log('Y : '+ dy);
    // console.log('X : '+ dx);

    translateContainer.style.top = dy + 'px';
    translateContainer.style.left = dx + 'px';
  });
});

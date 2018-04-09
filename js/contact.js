var darkBlueLine = document.querySelector('.dark-blue-line');
var reachMeTitle = document.querySelector('.reach-me-title');
var contactDetails = document.querySelector('.contact-details');
var networks = document.querySelectorAll('.social-network');
var imgPart = document.querySelector('.img-part');

setTimeout(function () {
  reachMeTitle.classList.add('opacity-1');
}, 1000);

setTimeout(function () {
  darkBlueLine.classList.add('width-100');
  contactDetails.classList.add('margin-top-0');
  contactDetails.classList.add('opacity-1');
}, 2000);


var networksDelay = 3000;

networks.forEach(function(network) {
  setTimeout(function () {
    network.classList.add('opacity-1');
  }, networksDelay);
  networksDelay+=500;
});

setTimeout(function () {
  imgPart.classList.add('opacity-1');
}, 5000);

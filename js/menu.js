var buttons = document.querySelectorAll('.link');
var body = document.querySelector('body');
var menu = document.querySelector('.menu');

buttons.forEach(function (button) {
  button.addEventListener('click', function() {
    body.classList.add('opacity-0');
    setTimeout(function () {
      window.location.href = button.dataset.page;
    }, 500);
  });
  button.addEventListener('mouseover', function(){
    buttons.forEach(function(active){
      if (active.classList.contains('active')){
        active.classList.add('active-change-color');
      }
    })
  })
  button.addEventListener('mouseout', function(){
    buttons.forEach(function(active){
      if (active.classList.contains('active')){
        active.classList.remove('active-change-color');
      }
    })
  })
});

setTimeout(function () {
  menu.classList.add('opacity-1');
}, 800);

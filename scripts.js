var nav = document.querySelector('nav');
// var section = document.querySelector('section');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    // nav.classList.add('bg-dark', 'shadow');
    nav.style.backgroundColor = 'black';


  } else {
    // nav.classList.remove('bg-dark', 'shadow');
    nav.style.backgroundColor = '';

  }
});
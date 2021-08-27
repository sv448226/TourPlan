const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowRight') {
    document.querySelector('.swiper-button--next').click();
  } 
  if (event.code == 'ArrowLeft') {
    document.querySelector('.swiper-button--prev').click();
  }
});
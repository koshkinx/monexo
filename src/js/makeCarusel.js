var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: 1500,
  prevNextButtons: false,

  wrapAround: true,
});

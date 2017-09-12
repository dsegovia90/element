$(document).ready(() => {
  console.log('ready!');

  $(document).mousemove(function(event) {
    $('.fadeIn-mouse').css('visibility', 'visible').addClass('fadeIn');
  })

})
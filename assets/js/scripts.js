$(document).ready(() => {
  $('body').css('visibility', 'visible');
  console.log('ready!');

  $(document).mousemove(function(event) {
    $('#big-element-logo-div').addClass('fadeOut');
    $('.fadeIn-mouse').css('visibility', 'visible').addClass('fadeIn');
  })

})
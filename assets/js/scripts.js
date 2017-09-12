$(document).ready(() => {
  console.log('ready!');

  $(document).mousemove(function(event) {
    $('#desktop-header').css('visibility', 'visible').addClass('fadeIn')
  })

})
$(document).ready(() => {
  $('body').css('visibility', 'visible');
  console.log('ready!');

  $(document).mousemove(function(event) {
    $('#big-element-logo-div')
      .addClass('fadeOut')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hideAndFadeIn);
  })
  
})

function hideAndFadeIn() {
  $('#big-element-logo-div').hide();
  $('.fadeIn-mouse').css('visibility', 'visible').addClass('fadeIn');
}
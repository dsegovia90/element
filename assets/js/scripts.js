
$(document).ready(() => {
  $('body').css('visibility', 'visible');

  $('#carousel-right').carousel('pause')
  setTimeout(function () {
    $('#carousel-right').carousel('cycle')
  }, 2500);


  $(document).mousemove(function (event) {
    $('#big-element-logo-div')
      .addClass('fadeOut')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hideAndFadeIn);
  })

})

function hideAndFadeIn() {
  $('#big-element-logo-div').hide();
  $('.fadeIn-mouse').css('visibility', 'visible').addClass('fadeIn');
}
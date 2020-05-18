$(function () {
  var $doc = $(document);

  $doc.on('scroll', function (e) {
    $('.app-head').toggleClass('is-scrolled', $doc.scrollTop() >= 80);

    if ($('#about-img').isInViewport()) {
      $('#about-img').addClass('slideIn');
    }
  });

  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true
  });

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
});

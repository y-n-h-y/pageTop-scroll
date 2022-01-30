function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $('.page-top').removeClass('moveright');
    $('.page-top').addClass('moveleft');
  } else {
    if ($('.page-top').hasClass('moveleft')) {
      $('.page-top').removeClass('moveleft');
      $('.page-top').addClass('moveright');
    };
  };
};

$(window).scroll(function () {
  PageTopAnime();
});

$(window).on('load', function () {
  PageTopAnime();
});

$('.page-top').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});
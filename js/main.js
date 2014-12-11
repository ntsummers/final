$(document).ready(function () {

  // List all the vars we are going to use, and settle our children
  var PictureList = $(".carousel").children('li'),
  NavBubbles = $('.carouselNav').children('li'),
  listLen = PictureList.length,
  current,
  changeTimeout;

  // These are the event handlers that will change the picture
  $(".carouselNav li").click(function () {
    var pos = $('.carouselNav li').index(this);
    ChangeCarousel(pos);
  });

  $(".prev").click(function () {
    ChangeCarousel('prev');
  });

  $(".next").click(function () {
    ChangeCarousel('next');
  });


  // Now to the function that will handle the carousel.
  function ChangeCarousel(position) {

    var pos = position;

    if (pos == 'prev') {
      pos = (current > 0) ? (current - 1) : (listLen - 1);
    }

    if (pos == 'next') {
      pos = (current < listLen - 1) ? (current + 1) : 0;
    }

    NavBubbles.removeClass('active')
    .eq(pos).addClass('active');

    PictureList.fadeOut(600);
    PictureList.eq(pos).fadeIn(600);

    current = pos;

    clearTimeout(changeTimeout);
    changeTimeout = setTimeout(function() { ChangeCarousel('next'); }, 6000);
  };

  //Now call the function we just wrote when the site loads to start the carousel!
  ChangeCarousel('next');

});

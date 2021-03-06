$(function () {
  //navbar fixed
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 20) {
      $(".navbar").addClass("bg");
    } else {
      $(".navbar").removeClass("bg");
    }
  });

  //video
  $(".venobox").venobox();

  // slider

  //insta-slide
  $(".insta-slide").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  
  $(".slider-things").slick({
    dots: false,
    infinite: true,
    speed: 250,
    fade: true,
    arrow: false,
    autoplay: true,
  });

  //shop-slide
  $(".shop-slide").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    speed: 1000,
    arrows: true,
    nextArrow: ".left",
    prevArrow: ".right",
    centerMode: true,
    centerPadding: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //testimonials-slide
  $(".testimonials-slide").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /* Demo purposes only */
  $("figure").mouseleave(function () {
    $(this).removeClass("hover");
  });
});

//also at the window load event
$(window).on("load", function () {
  new WOW().init();
});

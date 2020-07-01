$(function () {
  let w = $(document).width();

  if (w < 700) {
    $(".slider-tems1").attr("id", "slider-js");
  }
  // ===== SLICK SLIDER =====
  $("#slider-js").slick({
    dots: true,
    arrows: false,
    accessibility: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
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
});

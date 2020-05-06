$(function () {

  // ===== BURGER =====
  $(".burger").click(function () {
    $(this).toggleClass("active");
    $(".header__menu").toggleClass("active");
    // $("body").toggleClass("lock");
  });


  //   // ===== SLICK SLIDER =====
  $("#slider-js").slick({
    dots: true,
    arrows: true,
    accessibility: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 768,
      settings: {}
    }]
  });




})
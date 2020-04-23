$(".wrapper").addClass("loaded");

$(".icon-menu").click(function () {
  $(this).toggleClass("active");
  $(".menu__body").toggleClass("active");
  $("body").toggleClass("lock");
});

// ===== К БЛОКАМ С КЛАССОМ .ibg ДОБАВЛЯЕТСЯ ФОН =====
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage = `url('${ibg[i]
        .querySelector("img")
        .getAttribute("src")}')`;
    }
  }
}
ibg();

// ===== SLICK SLIDER
if ($(".slider__body").length > 0) {
  $(".slider__body").slick({
    dots: true,
    arrows: false,
    accessibility: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {}
    }]
  });
}
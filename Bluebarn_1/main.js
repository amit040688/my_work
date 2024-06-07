

$(document).ready(function () {
  $(".search_trigger").click(function (e) {
    $("body").toggleClass("search_open")
    e.stopPropagation();
  })

  $('.header_search_input').click(function (e) {
    e.stopPropagation();
  })
  $(".close_search,body").click(function () {
    $("body").removeClass("search_open")
  })

  $(".trigger").click(function () {
    $('body').toggleClass("menu_open")

  })
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".back_to_top").addClass('bp_visible');
    } else {
      $(".back_to_top").removeClass('bp_visible');
    }
  }); $(".back_to_top").click(function () {
    $("HTML, BODY").animate({
      scrollTop: 0
    }, 800);
  });

  $(".header nav.navbar .menu_item > li > a").click(function () {
    $(".header nav.navbar .menu_item > li ul").slideToggle();

  })

});



$('.carousel').owlCarousel({
margin: 10,
loop: true,
autoplay: true,
autoplayTimeOut: 100,
autoplayHoverPause: true,
responsive: {
  0: {
    items: 1,
    nav: false
  },
  600: {
    items: 1,
    nav: false
  },
  1000: {
    items: 1,
    nav: false
  }
}
});
$(window).scroll(function () {
if ($(window).scrollTop() > 100) {
$(".back_to_top").addClass('bp_visible');
} else {
$(".back_to_top").removeClass('bp_visible');
}
});$(".back_to_top").click(function() {
$("HTML, BODY").animate({
scrollTop: 0
}, 800);
});

$(".header_login .div-3").click(function(){
    $(".header_login").toggleClass("already_login")
});

$(".side_select_language .sidebarbox").click(function(){
    $(".sidelang_dropdown").toggleClass("active")
});

$(".user_login_icon").click(function(event){
  event.stopPropagation();
$(".aside_main_wrap").toggleClass("open_side")
$("body").toggleClass("no_scroll")
});

$(".side_menu_close").click(function(event){
  event.stopPropagation();
  $(".aside_main_wrap").removeClass("open_side")

  });
  $("body").click(function(event){
    event.stopPropagation();
    $(".aside_main_wrap").removeClass("open_side")
    });

    $("aside.aside_main_wrap .account").click(function(event){
      event.stopPropagation();
    });


    const allStar = document.querySelectorAll('.rating .star')
    const ratingValue = document.querySelector('.rating input')
    
    allStar.forEach((item, idx)=> {
      item.addEventListener('click', function () {
        let click = 0
        ratingValue.value = idx + 1
    
        allStar.forEach(i=> {
          i.classList.replace('bxs-star', 'bx-star')
          i.classList.remove('active')
        })
        for(let i=0; i<allStar.length; i++) {
          if(i <= idx) {
            allStar[i].classList.replace('bx-star', 'bxs-star')
            allStar[i].classList.add('active')
          } else {
            allStar[i].style.setProperty('--i', click)
            click++
          }
        }
      })
    })



    $(".open_popup_button").click(function(event){
      event.stopPropagation();
      $(".ring_modal").addClass("show_modal")
      $("body").addClass("overflow_hidden")
    });

    $(".modal_close_icon").click(function(event){
      event.stopPropagation();
         $(".ring_modal").removeClass("show_modal")
         $("body").removeClass("overflow_hidden")

    });

    $("body").click(function(event){
      event.stopPropagation();
      $(".ring_modal,.share_modal").removeClass("show_modal")
      $("body").removeClass("overflow_hidden")
    });

    $(".ring_modal_medium").click(function(event){
      event.stopPropagation();
    })



    $(".share_link").click(function(event){
      event.stopPropagation();
      $(".share_modal").addClass("show_modal")
      $("body").addClass("overflow_hidden")
    });

    $(".modal_close_icon").click(function(event){
      event.stopPropagation();
      $(".share_modal").removeClass("show_modal")
    });
$("body").click(function(event){
      event.stopPropagation();
      $(".share_modal").removeClass("show_modal")
    });



    $('.carousel-2').owlCarousel({
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 100,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 1,
          nav: false
        }
      }
      });

      $(".gellary_images").click(function(){
        $("body").addClass("open_gellary")
      });

      $("button.slider_close_button").click(function(){
      
        $("body").removeClass("open_gellary")
      });


// my business page js 
      let circularProgress = document.querySelector(".circular-progress"), 
      progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
      progressEndtValue = 50,
      speed = 100;

    let progress = setInterval(() => {
      progressStartValue++;
      progressValue.textContent = ` ${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(#e58d31 ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (progressStartValue == progressEndtValue) {
        clearInterval(progress);
      }
    }, speed);



    $(document).ready(function(){
      $("#myTable").dataTable();
    });

// single listing sleder 
    $('carousel-2').owlCarousel({
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 100,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 1,
          nav: false
        }
      }
      });
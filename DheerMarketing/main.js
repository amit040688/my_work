$(document).ready(function(){
$('.mobile_wrap ').click(function(){

    $(".header_wrap").toggleClass("menu_open")
})
});
$('.carousel').owlCarousel({
    margin:10 ,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 100,
    autoplayHoverPause: true,
    responsive: {
    0:{
    items: 1,
    nav: false
    },
    600:{
    items: 1,
    nav: false
    },
    1000:{
    items: 1,
    nav: false
    }
    }
    });
$(document).ready(function(){
    $(".toggle_trigger").click(function(){
     $ (".header").toggleClass("menu_open")
    });

})
const header = document.querySelector(".header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }

});










const mobileBtn = document.querySelector(".mobile-nav-icon button");
const mobileOverlay= document.querySelector(".overlay");
const mobileMenuContainer = document.querySelector(".mobile-nav-container");

let menuBar ='<i class="fas fa-bars"></i>';
let closeBtn = '<img src="./images/icon-close.svg" alt="close Button">';

mobileBtn.addEventListener('click', function(){
    mobileMenuContainer.style.display = "flex";
    mobileBtn.innerHTML = closeBtn;
})

mobileOverlay.addEventListener('click', function(){
    mobileMenuContainer.style.display = "none";
    mobileBtn.innerHTML = menuBar;
})


// carasoul responsive

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
})
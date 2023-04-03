const swiper = new Swiper('.swiper', {
    autoplay: {
        delay : 7000,
        disableOnInteraction: false,
    },
    loop: true,
  
    pagination: {
        el: '.swiper-pagination',
        clickable : true,
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})
function closeNav() {
    document.querySelector('#nav-check').checked = false
}
const scrollToTopBtn = document.getElementById("scrollToTopBtn")

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block"
    } else {
        scrollToTopBtn.style.display = "none"
    }
}
scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})
  
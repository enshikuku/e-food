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
});
let mealTypes = document.querySelectorAll('.mealTypes')
let meals = document.querySelectorAll('.meals')

mealTypes.forEach(mealType => {
    mealType.addEventListener('click', () => {
        let meal = mealType.nextElementSibling
        if (meal.style.display === 'none') {
            meals.forEach(meal => meal.style.display = 'none')
            mealTypes.forEach(mealType => mealType.firstElementChild.src = 'images/plus.png')
            meal.style.display = 'block'
        } else {
            meal.style.display = 'none'
        }
    })
})
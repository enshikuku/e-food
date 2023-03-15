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
// Get all the pages and buttons
const pages = document.querySelectorAll('.menuPage');
const prevBtn = document.getElementById('menuPrevBtn');
const nextBtn = document.getElementById('menuNextBtn');

// Set the initial page
let currentPage = 0;
showPage(currentPage);

// Add event listeners to the buttons
prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

// Function to show the current page
function showPage(pageNumber) {
  // Hide all pages
  pages.forEach((page) => {
    page.classList.remove('active');
  });

  // Show the current page
  pages[pageNumber].classList.add('active');
}

// let mealTypes = document.querySelectorAll('.mealTypes')
// let meals = document.querySelectorAll('.meals')

// mealTypes.forEach(mealType => {
//     mealType.addEventListener('click', () => {
//         let meal = mealType.nextElementSibling
//         if (meal.style.display === 'none') {
//             meals.forEach(meal => meal.style.display = 'none')
//             mealTypes.forEach(mealType => mealType.firstElementChild.src = 'images/plus.png')
//             meal.style.display = 'block'
//         } else {
//             meal.style.display = 'none'
//         }
//     })
// })
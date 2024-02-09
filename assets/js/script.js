
// //read more
const parentContainer = document.querySelector('.read-more-container');
parentContainer.addEventListener('click', event=>{
    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "";

})

// //counter
let nums2 = document.querySelectorAll(".nums2 .num2");
let Section = document.querySelector(".one");
let start = false; // Function Started ? No

 window.onscroll = function () {
if (window.scrollY >= Section.offsetTop) {
  if (!start) {
    nums2.forEach((num2) => startCount(num2));
  }
  start = true;
}
};
async function startCount(el) {
let goal2 = el.dataset.goal;
let count2 = setInterval(() => {
  el.textContent++;
  if (el.textContent == goal2) {
    clearInterval(count2);
  }
}, 2000 / goal2);
}


// $('input').on('change', function() {
// 	$('body').toggleClass('blue');
// });
  
  // swiper
 // swiper element
 const swiperEl = document.querySelector('swiper-container');

 // swiper parameters
 const swiperParams = {
   slidesPerView: 1,
   breakpoints: {
     640: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
   on: {
     init() {
       // ...
     },
   },
 };

 // now we need to assign all parameters to Swiper element
 Object.assign(swiperEl, swiperParams);

 // and now initialize it
 swiperEl.initialize();
    // we added an event listener when we click on hamburguer icon. And he show us an new  navigation menu

const navShow = document.querySelector('nav')
const toggle = document.querySelector('.toggle')

navShow.addEventListener('click', ()=>{
    navShow.classList.toggle('show')
})

// Swiper js is an library who can create carousels to our page 

const swiper = new Swiper ('.swiper',{

    direction: 'horizontal',
    loop: true,

    pagination:{
        el: '.swiper-pagination',
    },
    
    breakpoints:{
         // when window width is >= 320px
        320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
        },
         // when window width is full screen
        1200:{
            slidesPerView: 2,
            spaceBetween:32,
        }
    },

    keyboard:{
        enable: true,
    },

    mousewheel:{
        invert: true,
    },
    
}); 

// Scroll Reveal is an library who can reval the HTMl elements on our page. And these elements can be pop up in our screen in diferents postions. left,right,top,bottom etc...    

var slideUp = {
    distance: '5rem',
    duration:700,
    origin:'top',
    reset: true,
};


// Menu mobile is set false. Because we put reset: true, and when we add reset true, he removes the position fixed in mobile menu. And we put reset: false, in these items because they popping up in our screen and are hiding   


ScrollReveal().reveal(`
.logo,.menu,
#home,.title,.text,.button,.image,
.divider-01,.divider-02,
#about p,
#services h2,flex,.cards,.card, .card i, .card h3,
#testimonials h2,.swiper, .swiper-slide .testinonial, blockquote,
#contact .contacts-info, .contacts-info i,
footer .logo, footer p, .social`,slideUp)


ScrollReveal().reveal(`.logo,.menu`, { reset: false });

ScrollReveal().reveal('.menu',{mobile:false});

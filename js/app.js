/* =================Меню-бургер====================== */

const header = document.querySelector(".header");
// const burger = document.querySelector(".menu-header__btn");


if(header) {
  header.addEventListener('click', function(e) {
    const targetBurger = e.target.closest(".menu-header__btn");

    if(!targetBurger) return;

    console.log(targetBurger);

    header.classList.toggle("_menu-active");
    document.body.parentElement.classList.toggle("_lock");
  })
}


window.addEventListener('resize', function() {
  if(window.innerWidth > 768 && header.classList.contains("_menu-active")) 
    header.classList.remove("_menu-active");
    document.body.parentElement.classList.remove("_lock");
})


/* =================/Меню-бургер===================== */

// console.log(numb);

// var numb;
// console.log(numb);

// numb = 12;
// console.log(numb);



// let somevar = null;
// console.log(somevar);
// console.log(typeof somevar);





// if(somevar) console.log("ДА!");






/* ====================Слайдер======================= */

const sliderContainer = document.querySelector(".slider-about");
const slides = document.querySelectorAll(".slider-about__item");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

/* ----- */

let curSlide = 0;
const maxSlide = slides.length;
console.log(btnRight);


/* ----- */


function goToSlide (slide) {
  if(slides.length) {
    slides.forEach(function(s, i) {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
    
  }
}


/* ----- */


function nextSlide() {  
  if (curSlide === maxSlide - 1) {
    return;
  }  else {
    curSlide++; 
  } 

  goToSlide(curSlide);
}


/* ----- */


function prevSlide() {
  if (curSlide === 0) {
    // btnLeft.style.opacity = '0.5';
    return;
  } else {
    curSlide--;
    // btnLeft.style.opacity = '1';
  }

  goToSlide(curSlide);
}


/* ----- */


function init() {
  goToSlide(0);

}
init();


/* ----- */


// btnLeft.addEventListener('click', prevSlide);
// btnRight.addEventListener('click', nextSlide);

if (sliderContainer) {
  sliderContainer.addEventListener('click', function(e) {
    const targetElement = e.target;
    console.log(curSlide);
    if(targetElement.closest(".slider-about__btn_left")) {
      prevSlide();

      if(curSlide === 0) {
        btnLeft.style.opacity = '0.3';
        document.querySelector(".slider-about__btn_left-absolute").style.opacity = '0.3';
      }
      
      if (curSlide < maxSlide - 1) {
        btnRight.style.opacity = '1';
        document.querySelector(".slider-about__btn_right-absolute").style.opacity = '1';
      }

    } else if (targetElement.closest(".slider-about__btn_right")) 
      nextSlide();

      if(curSlide > 0) {
        btnLeft.style.opacity = '1';
        document.querySelector(".slider-about__btn_left-absolute").style.opacity = '1';
      }
      if (curSlide === maxSlide - 1) {
        btnRight.style.opacity = '0.3';
        document.querySelector(".slider-about__btn_right-absolute").style.opacity = '0.3';
      }
    })
}


/* ----- */





// window.addEventListener('resize', function() {
//   if(this.window.innerWidth < 768) {
//     init();
//     slides.forEach(function(s) {
//       s.style.transform = 'translateX(0px)';
//     })  
//   } else {
//     // init();
//   }
// })


/* ===================/Слайдер======================= */








/* ================Прокрутка к блоку================= */

const headerMenu = document.querySelector(".menu-header");


if(headerMenu) {
  headerMenu.addEventListener('click', function(e) {
    const menuLink = e.target.closest(".menu-header__link[data-goto]");

    if(!menuLink) return;

    console.log(menuLink);

    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      // console.log(gotoBlock);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - header.offsetHeight;


      if(header.classList.contains("_menu-active")) 
        header.classList.remove("_menu-active");
        document.body.parentElement.classList.remove("_lock");




      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }

  })
}




/* ===============/Прокрутка к блоку================= */







/* =================Шапка отлипает=================== */


const blockAbout = document.querySelector(".about");

console.log(header.offsetHeight);

if(blockAbout) {
  window.addEventListener('scroll', function() {
    console.log(blockAbout.getBoundingClientRect().top);

    if(blockAbout.getBoundingClientRect().top <= header.offsetHeight) {
      console.log('Сработало!');

      header.classList.add("header-fixed");
      // header.style.top = `${blockAbout.offsetTop - header.offsetHeight}px`;
      // header.style.top = ``;
      // header.style.top = `${blockAbout.offsetTop}px`;
      // header.style.position = 'fixed';
      // header.style.backgroundColor = '#46474ffb';
      // header.style.boxShadow = '0px 3px 5px 5px #46474ffb';
    } else {
        header.classList.remove("header-fixed");
        
        // header.style.position = 'absolute';
        // header.style.top = `${blockAbout.offsetTop - header.offsetHeight}px`;
    }
  })

  
}

/* =================/Шапка отлипает=================== */








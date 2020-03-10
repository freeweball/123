const sliders2 = `.swiper-container-s2`;
const sliders3 = `.swiper-container-s3`;

const slideHeightSwiper = (SliderClass) => {
  const wrapperPage = document.querySelector(`.education-main`);
  const buttonPrevs = wrapperPage.querySelectorAll(`.swiper-button-prev`);
  const buttonNexts = wrapperPage.querySelectorAll(`.swiper-button-next`);
  const slider = document.querySelector(SliderClass);
  const slideList = slider.querySelectorAll(`.ed-curses__slide`);
  let slideHeight = 0;

  for (let i = 0; i < slideList.length; i++) {
    let maxHeight = slideList[i].offsetHeight;
    if (maxHeight > slideHeight) {
      slideHeight = maxHeight;
    }
  };

  for (let i = 0; i < slideList.length; i++) {
    slideList[i].style.height = slideHeight + `px`;
  };

  for (let i = 0; i < buttonPrevs.length; i++) {
    buttonPrevs[i].style.opacity = '1';
  };

  for (let i = 0; i < buttonNexts.length; i++) {
    buttonNexts[i].style.opacity = '1';
  };

};

var mySwiper = new Swiper('.swiper-container-s1', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
    nextEl: '.swiper-button-next-s1',
    prevEl: '.swiper-button-prev-s1',
  },
});

var mySwiper = new Swiper('.swiper-container-s2', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 42,
    breakpoints: {
      850: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      580: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    },
    navigation: {
    nextEl: '.swiper-button-next-s2',
    prevEl: '.swiper-button-prev-s2',
    on: {
      init: setTimeout(() => slideHeightSwiper(sliders2), 500),
    },
  },
});

var mySwiper = new Swiper('.swiper-container-s3', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 42,
    breakpoints: {
      850: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      580: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    },
    navigation: {
    nextEl: '.swiper-button-next-s3',
    prevEl: '.swiper-button-prev-s3',
    on: {
      init: setTimeout(() => slideHeightSwiper(sliders3), 500),
    },
  },
});

var mySwiper = new Swiper('.swiper-container-s4', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
    nextEl: '.swiper-button-next-s4',
    prevEl: '.swiper-button-prev-s4',
  },
});

var mySwiper = new Swiper('.swiper-container-s5', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 42,
    breakpoints: {
      850: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      580: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    },
    navigation: {
    nextEl: '.swiper-button-next-s5',
    prevEl: '.swiper-button-prev-s5',
  },
});

var mySwiper = new Swiper('.swiper-container-s6', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
    nextEl: '.swiper-button-next-s6',
    prevEl: '.swiper-button-prev-s6',
  },
});

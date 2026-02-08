///////// ** Trusted Quality Slider** /////////
export function initTrustedQualitySlider() {
  new Swiper(".trusted-swiper", {
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    spaceBetween: 10,
    updateOnWindowResize: true,
    watchOverflow: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        loop: true,
      },
      767: {
        slidesPerView: 2,
        loop: true,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
}

///////// ** Our solutions Slider** /////////
export function initSolutionsSlider() {
  new Swiper(".solutions-swiper", {
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    spaceBetween: 4,
    updateOnWindowResize: true,
    watchOverflow: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        loop: true,
      },
      450: {
        slidesPerView: 2,
        loop: true,
      },
      768: {
        slidesPerView: 3,
        loop: true,
      },
      991: {
        slidesPerView: 4,
      },
    },
  });
}

///////// ** Services Slider** /////////
export function initServicesSlider() {
  new Swiper(".services-swiper", {
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    spaceBetween: 30,
    updateOnWindowResize: true,
    watchOverflow: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        loop: true,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
}

///////// ** news Slider** /////////
export function initNewsSlider() {
  new Swiper(".news-swiper", {
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    spaceBetween: 24,
    updateOnWindowResize: true,
    watchOverflow: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        loop: true,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
}

///////// ** Our team Slider** /////////
export function initTeamSlider() {
  new Swiper(".team-swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    spaceBetween: 10,
    updateOnWindowResize: true,
    watchOverflow: true,
    // If we need pagination
    pagination: {
      el: ".custom-swiper .swiper-pagination",
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".custom-swiper .swiper-button-next",
      prevEl: ".custom-swiper .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        loop: true,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4.5,
        spaceBetween: 16,
      },
    },
  });
}

///////// ** Services Slider** /////////
export function initBPOServicesSlider() {
  new Swiper(".grid2-swiper", {
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 30,
    updateOnWindowResize: true,
    watchOverflow: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
}

///////// ** Awards Slider** /////////
export function initAwardsSlider() {
  new Swiper(".awards-swiper", {
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    spaceBetween: 24,
    updateOnWindowResize: true,
    watchOverflow: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        loop: true,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
      },
      992: {
        slidesPerView: 2,
      },
    },
  });
}

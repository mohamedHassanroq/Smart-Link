import InfiniteMarquee from "../../js/infinite-marquee.bundle.js";

export function initMarquee() {
  new InfiniteMarquee({
    element: ".partners__content",
    speed: 25000,
    direction: "left",
    spaceBetween: "20px",
    pauseOnHover: true,
    duplicateCount: 3,
  });
}

export function initAboutPartnersMarquee() {
  // bottom columns
  document.querySelectorAll(".marquee-bottom").forEach((el) => {
    new InfiniteMarquee({
      element: el,
      direction: "bottom",
      speed: 25000,
      spaceBetween: "20px",
      pauseOnHover: true,
      duplicateCount: 2,
    });
  });

  // top columns
  document.querySelectorAll(".marquee-top").forEach((el) => {
    new InfiniteMarquee({
      element: el,
      direction: "top",
      speed: 25000,
      spaceBetween: "20px",
      pauseOnHover: true,
      duplicateCount: 2,
    });
  });
}

export function initClientsMarquee() {
  document.querySelectorAll(".clients-marquee.left").forEach((el) => {
    new InfiniteMarquee({
      element: el,
      direction: "left",
      speed: 25000,
      spaceBetween: "20px",
      pauseOnHover: true,
      duplicateCount: 3,
    });
  });

  document.querySelectorAll(".clients-marquee.right").forEach((el) => {
    new InfiniteMarquee({
      element: el,
      direction: "right",
      speed: 25000,
      spaceBetween: "20px",
      pauseOnHover: true,
      duplicateCount: 3,
    });
  });
}

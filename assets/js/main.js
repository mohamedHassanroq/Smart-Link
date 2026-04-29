// main.js
import { initHeader } from "./components/header.js";
import {
  initMarquee,
  initAboutPartnersMarquee,
  initClientsMarquee,
} from "./components/marquee.js";
import { lazyLoad, preloadImage } from "./components/lazyload.js";
import {
  initTrustedQualitySlider,
  initSolutionsSlider,
  initServicesSlider,
  initNewsSlider,
  initTeamSlider,
  initBPOServicesSlider,
  initAwardsSlider,
} from "./components/sliders.js";
import { staticsScroll } from "./components/counter.js";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMarquee();
  lazyLoad();
  preloadImage();
  initTrustedQualitySlider();
  initSolutionsSlider();
  initServicesSlider();
  initNewsSlider();
  initTeamSlider();
  initBPOServicesSlider();
  initAboutPartnersMarquee();
  staticsScroll();
  initClientsMarquee();
  initAwardsSlider();

  if (window.Fancybox) {
    Fancybox.bind("[data-fancybox]", {});
  }
  // Initialize main select
  document.querySelectorAll(".custom-select").forEach((select) => {
    new SlimSelect({
      select: select,
      settings: {
        showSearch: false,
      },
    });
  });
});

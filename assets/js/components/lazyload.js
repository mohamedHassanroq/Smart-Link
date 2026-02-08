function lazyLoad() {
  const images = document.querySelectorAll(".lazy-img");

  if (!images.length) return; // nothing to observe

  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img) preloadImage(img);
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(function (image) {
    if (image) imageObserver.observe(image);
  });
}

function preloadImage(img) {
  const src = img?.getAttribute("data-src");
  if (!src) return; // safety check

  img.src = src;
  img.onload = function () {
    img.parentElement?.classList.remove("loading-img");
    img.parentElement?.classList.add("loaded-img");
  };
}

export { lazyLoad, preloadImage };

export function staticsScroll() {
  const statNums = document.querySelectorAll(".stat__number");
  let viewed = false;

  if (!statNums.length) return;

  const animateCount = (el, target, duration = 3000) => {
    let start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);

      el.textContent = value;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !viewed) {
          viewed = true;

          statNums.forEach((el) => {
            const target = parseInt(el.dataset.count, 10);
            animateCount(el, target);
          });

          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  statNums.forEach((el) => observer.observe(el));
}

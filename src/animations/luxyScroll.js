import luxy from 'luxy.js';

const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

const scrollSpeeds = {
  "smooth-scroll": 0.08,
  "smooth-scroll-light": 0.1,
  "smooth-scroll-medium": 0.04,
  "smooth-scroll-strong": 0.02,
};

export function initSmoothScroll() {
  if (isMobile || typeof luxy.init !== "function") return;

  document.querySelectorAll("[yc-animate]").forEach((el) => {
    const attr = el.getAttribute("yc-animate");

    if (scrollSpeeds[attr] && !document.getElementById("luxy")) {
      el.id = "luxy";
      luxy.init({
        wrapper: "#luxy",
        wrapperSpeed: scrollSpeeds[attr],
      });
    }
  });
}

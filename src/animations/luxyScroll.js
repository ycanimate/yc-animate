import luxy from 'luxy.js';

// Force Luxy to global scope for use with CDN builds
if (typeof window !== "undefined") {
  window.luxy = luxy;
}

const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

const scrollSpeeds = {
  "smooth-scroll": 0.08,
  "smooth-scroll-light": 0.1,
  "smooth-scroll-medium": 0.04,
  "smooth-scroll-strong": 0.02,
};

export function initSmoothScroll() {
  document.querySelectorAll("[yc-animate]").forEach((el) => {
    const attr = el.getAttribute("yc-animate");

    if (!isMobile && window.luxy && scrollSpeeds[attr]) {
      el.id = "luxy";
      window.luxy.init({
        wrapper: "#luxy",
        wrapperSpeed: scrollSpeeds[attr],
      });
    }
  });
}

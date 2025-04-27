// src/animations/fade.js
export function initFade() {
  document.querySelectorAll("[yc-animate]").forEach((el) => {
    const attr = el.getAttribute("yc-animate");

    const fadeMatch = attr?.match(/^(fade-(in|out|in-out))(?:-(\d+))?$/i);
    if (!fadeMatch || typeof ScrollTrigger === "undefined") return;

    const mode = fadeMatch[1];
    const offset = fadeMatch[3] || "85";

    const fadeProps = {
      opacity: 1,
      y: 0,
      duration: 1.4,
      ease: "ycanimate-ease-out",
      scrollTrigger: {
        trigger: el,
        start: `top ${offset}%`,
      },
    };

    if (mode === "fade-in") {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          ...fadeProps,
          scrollTrigger: {
            ...fadeProps.scrollTrigger,
            toggleActions: "play none none none",
          },
        }
      );
    } else if (mode === "fade-out") {
      gsap.to(el, {
        opacity: 0,
        y: 40,
        duration: 1.4,
        ease: "ycanimate-ease-out",
        scrollTrigger: {
          trigger: el,
          start: `top ${offset}%`,
          toggleActions: "play none none none",
        },
      });
    } else if (mode === "fade-in-out") {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          ...fadeProps,
          scrollTrigger: {
            ...fadeProps.scrollTrigger,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  });
}

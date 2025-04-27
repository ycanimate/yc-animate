// src/animations/splitText.js
export function initSplitText() {
  document.querySelectorAll("[yc-animate]").forEach((el) => {
    const attr = el.getAttribute("yc-animate");

    if (!attr.startsWith("split-text")) return;

    if (typeof SplitType === "undefined") return;

    const lines = new SplitType(el, {
      types: "lines",
      lineClass: "ycanimate-splittext",
    }).lines;

    const mode = attr === "split-text" ? null : attr.replace("split-text-", "");

    const base = {
      yPercent: 100,
      opacity: 0,
      rotate: 0.001,
    };

    const anim = {
      yPercent: 0,
      opacity: 1,
      rotate: 0.001,
      duration: 1.47,
      ease: "ycanimate-ease",
      stagger: 0.07,
    };

    if (!mode) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          gsap.from(lines, anim);
        }, 50);
      });
    } else {
      const toggle =
        mode === "in-out"
          ? "play reverse play reverse"
          : "play none none none";

      gsap.fromTo(lines, base, {
        ...anim,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: toggle,
        },
      });
    }
  });
}

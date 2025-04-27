document.querySelectorAll("[yc-animate]").forEach((el) => {
  const attr = el.getAttribute("yc-animate");

  if (attr === "split-text" && typeof SplitType !== "undefined") {
    const split = new SplitType(el, {
      types: "lines",
      lineClass: "ycanimate-splittext",
    });
    const lines = el.querySelectorAll(".ycanimate-splittext");

    requestAnimationFrame(() => {
      setTimeout(() => {
        gsap.from(lines, {
          yPercent: 100,
          opacity: 0,
          rotate: 0.001,
          duration: 1.47,
          ease: "ycanimate-ease",
          stagger: 0.07,
        });
      }, 50);
    });
  }

  if ((attr === "split-text-in" || attr === "split-text-in-out") && typeof SplitType !== "undefined" && typeof ScrollTrigger !== "undefined") {
    const split = new SplitType(el, {
      types: "lines",
      lineClass: "ycanimate-splittext",
    });

    const lines = el.querySelectorAll(".ycanimate-splittext");
    const toggleActions = attr === "split-text-in-out" ? "play reverse play reverse" : "play none none none";

    gsap.fromTo(
      lines,
      {
        yPercent: 100,
        opacity: 0,
        rotate: 0.001,
      },
      {
        yPercent: 0,
        opacity: 1,
        rotate: 0.001,
        duration: 1.47,
        ease: "ycanimate-ease",
        stagger: 0.07,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions,
        },
      }
    );
  }
});

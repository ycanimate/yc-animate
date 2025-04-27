document.querySelectorAll('[yc-animate="link"]').forEach((el) => {
  el.style.position = "relative";
  el.style.textDecoration = "none";
  el.style.display = "inline-block";
  el.style.cursor = "pointer";

  const underline = document.createElement("span");
  Object.assign(underline.style, {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "-0.15em",
    height: "0.08em",
    backgroundColor: "currentColor",
    transform: "scaleX(1)",
    transformOrigin: "right",
    display: "block",
    pointerEvents: "none",
  });

  el.appendChild(underline);

  el.addEventListener("mouseenter", () => {
    gsap.fromTo(
      underline,
      { scaleX: 1, transformOrigin: "right" },
      {
        scaleX: 0,
        duration: 0.3,
        ease: "ycanimate-link-ease",
        onComplete: () => {
          gsap.to(underline, {
            scaleX: 1,
            transformOrigin: "left",
            duration: 0.75,
            ease: "ycanimate-link-ease",
          });
        },
      }
    );
  });
});

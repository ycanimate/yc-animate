// src/animations/selectionStyle.js
export function initSelectionStyle() {
  document.querySelectorAll("[yc-animate]").forEach((el) => {
    const attr = el.getAttribute("yc-animate");
    if (!attr.startsWith("ts#")) return;

    const match = attr.match(/^ts#([^#]+)#([^#]+)$/);
    if (match) {
      const [_, textColor, bgColorRaw] = match;
      const isBlack = ["black", "#000", "#000000"].includes(bgColorRaw.toLowerCase());
      const bgColor = isBlack ? "rgba(0,0,0,0.99)" : bgColorRaw;

      const style = document.createElement("style");
      style.textContent = `
        ::selection {
          background-color: ${bgColor};
          color: ${textColor};
        }
        ::-moz-selection {
          background-color: ${bgColor};
          color: ${textColor};
        }
      `;
      document.head.appendChild(style);
    }
  });
}

// yc-animate Core Index Entry
// All animations initialize after DOM is ready

window.addEventListener("DOMContentLoaded", () => {
  // Register custom eases globally
  import('./animations/registerEase.js');

  // Initialize each animation type
  import('./animations/luxyScroll.js');
  import('./animations/fade.js');
  import('./animations/splitText.js');
  import('./animations/link.js');
});

import { initSmoothScroll } from './animations/luxyScroll.js';
import { initSplitText } from './animations/splitText.js';
import { initFade } from './animations/fade.js';
import { initLinkHover } from './animations/link.js';

window.addEventListener('DOMContentLoaded', () => {
  // Register eases if GSAP and CustomEase are available
  if (typeof CustomEase !== 'undefined') {
    CustomEase.create('ycanimate-ease', '0.6, 0, 0.1, 0.99');
    CustomEase.create('ycanimate-ease-out', '0.33, 1, 0.68, 1');
    CustomEase.create('ycanimate-link-ease', '0.25, 1, 0.5, 1');
  }

  initSmoothScroll();
  initSplitText();
  initFade();
  initLinkHover();
});

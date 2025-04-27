
if (typeof window.luxy === "undefined") {
  import('luxy.js').then((luxyModule) => {
    window.luxy = luxyModule.default;
  });
}

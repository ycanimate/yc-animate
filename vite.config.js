// vite.config.js
export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ycAnimate',
      fileName: 'yc-animate',
      formats: ['iife'],
    },
  },
};

import { resolve } from "path";

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        venus: resolve(__dirname, "pages/venus/index.html"),
        earth: resolve(__dirname, "pages/earth/index.html"),
        mars: resolve(__dirname, "pages/mars/index.html"),
        jupiter: resolve(__dirname, "pages/jupiter/index.html"),
        saturn: resolve(__dirname, "pages/saturn/index.html"),
        uranus: resolve(__dirname, "pages/uranus/index.html"),
        neptune: resolve(__dirname, "pages/neptune/index.html"),
      },
    },
  },
};

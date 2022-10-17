const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // devServer: {
    //   proxy: {
    //     "/api": {
    //       target: "http://localhost:5005",
    //       changeOrigin: true,
    //       // pathRewrite: {
    //       //   "^/api": "/api",
    //       // },
    //     },
    //   },
    // },
  },
});

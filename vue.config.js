const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/tpc-website/" : "/", // 默认publicPath是'/'，如果发布到
});

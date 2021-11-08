const { path } = require("@vuepress/utils");

module.exports = {
  lang: "zh-CN",
  title: "有趣的 CSS",
  description: "CSS 游乐场",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  dest: ".vuepress/dist",
  cache: ".vuepress/.cache",
  temp: ".vuepress/.temp",
  public: "./public",

  themeConfig: {
    logo: "./logo.svg",
    repo: "curly210102/fun-with-css",
    lastUpdatedText: "最近更新",
    contributors: false,
    sidebar: [
      "/README.md",
      {
        text: "文字动画",
        children: [
          "/text-animation/fading",
          "/text-animation/battery",
          "/text-animation/spotlight",
        ],
      },
    ],
  },
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
    require("./plugins/vuepress-plugin-examples"),
  ],
};

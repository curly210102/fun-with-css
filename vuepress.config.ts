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
    repo: "",
    lastUpdatedText: "最近更新",
    sidebar: [
      "/README.md",
      {
        text: "文字动画",
        children: [
          {
            text: "文字渐入",
            link: "/text-animation/fading",
          },
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

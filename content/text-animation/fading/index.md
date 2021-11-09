# 文字渐入效果

<Example id="default" />

## 实现原理

<p>
<TagGroup :tags="['background-clip','background-images', 'background-position', 'background-size']" />
</p>

![picture 1](/images/4a28868b81f866fdedc4c459ef4efc5bde1fde9f2767085bfb40825e4fb67b67.png)

- 使用 `background-clip: text` 镂空文字
- `background-images` 设置线性渐变，初始状态为透明达到隐藏文字的效果，最终状态为字体颜色，中间为渐变过程，因此需要设置 3 屏，也就是 300% 的长度
- `background-position` 移动背景图片位置，产生渐入效果

### 扩展

- `background-clip` 的兼容性：[Caniuse](https://caniuse.com/?search=background-clip%3Atext)，除 Firefox 以外都需要 `-webkit-` 前缀修饰，IE 不支持
- `background-size` 百分比相对于元素计算
- `background-position` 百分比计算遵循：`(container width - image width) * (position x%) = (x offset value)`，100% 时右边界重合，0% 时左边界重合

## 相关链接

<p>
<EmbedVideo url="//player.bilibili.com/player.html?aid=842480428&bvid=BV1n54y1C7dt&cid=246520349&page=1" />
</p>

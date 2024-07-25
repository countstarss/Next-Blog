# Note-01.md

## 渐变背景色

background-image: linear-gradient(
      to bottom,
      var(--color-grey-900),
      var(--color-grey-800)
);

## 渲染markdown类型帖子内容的第三方库 -- react-markdown

## 如何控制在ReactMarkdown中渲染的图片的尺寸

- 

## 如何使用markdown的 gray-matter
- gray-matter 是在markdown文档最前面添加文档信息的部分，上下用3个dash分隔开
- 需要安装一个库 gray-matter,它允许我们读取markdown文件内容

## md 图片显示
[load image](/images/posts/getting-started-with-nextjs2/nextjs-file-based-routing.png)

如果前面有！，说明需要渲染，如果没有感叹号，alt则成为一个超链接，点击转到图片


在 Next.js 中，为了在生产环境下进行图像优化，强烈推荐使用可选的 `sharp` 软件包。你可以通过运行 `npm i sharp` 命令来安装它，然后 Next.js 会自动将其用于图像优化。

**为什么推荐使用 sharp 包？**

* **更佳的优化效果：** 与不使用 sharp 包的内置方法相比，sharp 包可以显著提高图像优化的质量。这可以带来更小的文件尺寸和更快的网页加载速度。
* **更强大的功能：** sharp 是一个功能强大的图像处理库，它可以让 Next.js 执行更高级的优化操作，例如调整图像尺寸、转换格式以及保持渐进式加载等。

**如何使用 sharp 包？**

1. 安装 sharp 包：使用 `npm i sharp` 命令安装 sharp 软件包。
2. 无需额外配置：Next.js 会自动检测到已安装的 sharp 包，并在生产模式下将其用于图像优化。

**总而言之，为了获得更快速、更高效的网站，强烈建议在 Next.js 的图像优化中结合使用 sharp 包。**

**额外的资源：**

有关 Next.js 图像优化的更多信息，可以参考官方文档：[Next.js 官方文档 - 图像优化](Next.js 官方文档 - 图像优化， 他们不支持直接链接，但您可以使用提供的标题搜索它。)
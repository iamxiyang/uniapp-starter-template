<h2 align="center">uniapp-starter-template</h2>

<p align="center">
  <strong>uniapp快速开发模板</strong>：基于 uniapp, Vue3, Vite, TypeScript 构建，融合 <a href="https://tmui.design/">TMUI</a> 和 <a href="https://github.com/unocss/unocss">UnoCSS</a>，支持自动构建小程序。
</p>

<p align="center">
  项目地址：
  <a href="https://github.com/iamxiyang/uniapp-starter-template">https://github.com/iamxiyang/uniapp-starter-template</a>
</p>

## 🚀 特性

- 使用前沿技术栈：[Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/)  —— 极速体验！
- 基于[文件的路由系统](https://github.com/uni-helper/vite-plugin-uni-pages)，简化页面配置。
- [自动化组件加载](https://github.com/uni-helper/vite-plugin-uni-components)，无需手动引入。
- 灵活的[布局系统](https://github.com/uni-helper/vite-plugin-uni-layouts)，易于扩展和维护。
- 使用 [UnoCSS](https://github.com/unocss/unocss) —— 高性能的原子化 CSS 引擎，提升样式开发效率。
- 包含 [丰富的图标库](https://github.com/unocss/unocss/tree/main/packages/preset-icons)，支持多种图标集。
- 全面支持 [Vue 3 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)，代码更简洁。
- [API 自动加载](https://github.com/antfu/unplugin-auto-import)，无需手动引入 Composition API。
- 强化代码质量，集成 [TypeScript](https://www.typescriptlang.org/) 和 [ESLint](https://eslint.org/)。
- 集成 [TMUI3](https://tmui.design/com/Button.html)，支持全端，包括 nvue 原生渲染、H5、小程序 的组件库。
- 结合 GitHub Actions 和 [uni-mini-ci](https://github.com/Moonofweisheng/uni-mini-ci) ，实现自动构建并推送到微信小程序。



## 现在可以试试!

### GitHub 模板

[使用这个模板创建仓库](https://github.com/iamxiyang/uniapp-starter-template/generate).

### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
npx degit iamxiyang/uniapp-starter-template my-uniapp-project
cd my-uniapp-project
```

## 使用

```bash
# 安装依赖
pnpm install

# 开发运行
pnpm dev:h5
pnpm dev:mp-weixin
pnpm dev:app

# 编译构建
pnpm build:h5
pnpm build:mp-weixin
pnpm build:app
```

## 使用说明

- 基于 Vue3 SFC `<script setup>` 语法，不支持 Vue2。
- 目前只在 H5、微信小程序、APP(Android) 上进行测试，理论上其他平台也能使用。
- 欢迎通过 [Issues](https://github.com/iamxiyang/uniapp-starter-template/issues) 和 [PRs](https://github.com/iamxiyang/uniapp-starter-template/pulls) 提交问题或建议。
- 如果需要启用自动构建，请将项目放在 github 中，同时在 Github 中访问 `Settings - Security - Actions secrets and variables - Actions` 配置 4 个变量，具体如下：

  > 配置 WECHAT_APPID 和 WECHAT_ENCODINGAESKEY ，值分别为微信小程序的 appid 和 密钥文件文本内容，参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html)，用于自动构建和上传到小程序。  
  > 配置 WXPUSHER_APP_TOKEN 、WXPUSHER_TOPIC_IDS ，用于构建结果推送。目前使用的是 [wxpusher](https://wxpusher.zjiecode.com/docs/#/?id=%e8%8e%b7%e5%8f%96apptoken)，如果不配置不影响构建，但不会推送结果。   
  > 如果需要修改构建流程、推送信息，直接修改 `.github/workflows/build-deploy-ci.yml`  


## 灵感来源

- [uniapp-starter](https://gitee.com/dodu/uniapp-starter): uniapp Vue3 Vite TypeScript 快速开发解决方案。
- [vitesse-uni-app](https://github.com/uni-helper/vitesse-uni-app): 由 Vite & uni-app 驱动的跨端快速启动模板。

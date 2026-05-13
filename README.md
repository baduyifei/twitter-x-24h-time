# Twitter/X 24-Hour Time

> 仓库地址：<https://github.com/baduyifei/twitter-x-24h-time>

一个简单透明的 Tampermonkey 用户脚本，用于把 Twitter/X 网页版中文界面中的 `上午/下午 H:MM` 时间显示转换为 24 小时制。

## 功能

- 将 `上午 12:05` 转换为 `00:05`
- 将 `上午 9:30` 转换为 `09:30`
- 将 `下午 1:20` 转换为 `13:20`
- 将 `下午 12:40` 保持为 `12:40`
- 支持 `twitter.com` 和 `x.com`
- 支持 Twitter/X 单页应用中的动态加载内容
- 不发起网络请求，不修改链接，不收集数据

## 安装

### 一键安装（推荐）

确认已安装 Tampermonkey 后，点击下方链接，Tampermonkey 会自动弹出安装面板：

👉 [安装 twitter-x-24h-time.user.js (v1.0.2)](https://github.com/baduyifei/twitter-x-24h-time/releases/download/v1.0.2/twitter-x-24h-time.user.js)

安装后 Tampermonkey 会通过 `@updateURL` 自动检查更新。

### 手动安装

1. 安装 Tampermonkey。
2. 新建用户脚本。
3. 复制 [`twitter-x-24h-time.user.js`](./twitter-x-24h-time.user.js) 的全部内容并粘贴保存。
4. 刷新 Twitter/X 页面。

更详细的步骤见 [docs/install.md](./docs/install.md)。

## 使用

脚本启用后会自动运行，不需要额外配置。打开或刷新 Twitter/X 网页后，页面中匹配中文 `上午/下午 H:MM` 的时间文本会被改写为 24 小时制。

## 安全说明

脚本权限为 `@grant none`，逻辑只遍历当前页面的文本节点并做本地字符串替换。它不会读取 Cookie、不会调用外部接口、不会上传数据，也不会改写网页链接。

## 版本

当前版本：`1.0.2`

## 作者

- 用户名：baduyifei
- 邮箱：baduyifei@gmail.com
- 网站：https://baduyifei.com

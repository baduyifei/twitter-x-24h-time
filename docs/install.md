# 安装文档

## 前置条件

- Chrome、Edge、Firefox 或其他支持用户脚本管理器的浏览器
- Tampermonkey 或兼容的用户脚本管理器

## 安装步骤

1. 打开浏览器扩展商店，安装 Tampermonkey。
2. 点击浏览器工具栏中的 Tampermonkey 图标。
3. 选择 `添加新脚本`。
4. 删除编辑器中的默认内容。
5. 复制项目根目录中的 `twitter-x-24h-time.user.js` 全部内容并粘贴进去。
6. 保存脚本。
7. 确认脚本处于启用状态。
8. 打开或刷新 `https://x.com` 或 `https://twitter.com`。

## 验证方式

进入 Twitter/X 后，查看帖子、通知或悬停时间提示中是否仍出现 `上午` 或 `下午`。如果脚本匹配成功，时间会显示为类似 `09:30`、`13:20`、`21:00` 的 24 小时制格式。

## 卸载

进入 Tampermonkey 管理面板，找到 `Twitter/X 24-Hour Time`，点击删除或关闭即可。

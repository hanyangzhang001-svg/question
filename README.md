# 体验感问卷设计器

一个纯前端的问卷设计器，包含实时预览、编辑器、品牌 Logo 上传、二维码入口以及回答统计面板。适合部署在任何静态托管平台（GitHub Pages、Netlify、Vercel 等）。

## 本地预览

```bash
python3 -m http.server 8000
# 浏览器访问 http://127.0.0.1:8000
```

## 部署到 GitHub Pages
1. 推送到 GitHub 仓库：
   ```bash
   git remote add origin git@github.com:<your-name>/<your-repo>.git
   git push -u origin main
   ```
2. 打开 GitHub → 仓库 **Settings → Pages**。
3. Source 选择 `Deploy from a branch`，Branch 选择 `main`，目录保持 `/ (root)`，保存即可。
4. 几分钟后即可通过 `https://<your-name>.github.io/<your-repo>/` 访问，并可把该链接填入页面的二维码输入框。

## 目录结构
```
.
├── index.html        # 主页面
├── assets/
│   └── logo.svg      # 默认 Logo，可替换为官方图形
├── README.md
└── .gitignore
```

## License
MIT

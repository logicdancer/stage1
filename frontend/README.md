# 股票信息平台 - 前端

这是一个基于React的现代化股票信息查询平台，提供全球股票市场的实时数据和分析工具。

## 功能特性

- 🌍 **全球市场支持** - 支持美股、A股、港股等全球主要市场
- 📊 **实时数据** - 获取最新的股票价格、成交量、市值等关键信息
- 📈 **技术指标** - 移动平均线、成交量变动率等技术分析
- 💰 **财务数据** - 市盈率、股息率、期权数据等深度分析
- 📱 **响应式设计** - 支持各种设备访问
- 🎨 **现代化UI** - 基于Material-UI的优雅界面

## 技术栈

- **React 18** - 现代化的前端框架
- **Material-UI** - Google Material Design组件库
- **React Router** - 单页应用路由管理
- **Axios** - HTTP客户端库

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

应用将在 [http://localhost:3000](http://localhost:3000) 启动。

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
src/
├── components/     # 可复用组件
│   └── Navbar.js  # 导航栏组件
├── pages/         # 页面组件
│   ├── Home.js    # 首页
│   ├── StockInfo.js # 股票详情页
│   └── About.js   # 关于页面
├── App.js         # 主应用组件
├── App.css        # 应用样式
├── index.js       # 应用入口
└── index.css      # 全局样式
```

## 使用说明

1. **搜索股票** - 在首页输入股票代码（如：AAPL、600519.SS、0700.HK）
2. **查看详情** - 点击搜索或热门股票按钮查看详细信息
3. **数据分析** - 查看技术指标、财务数据、期权信息等

## 支持的股票代码格式

- **美股**: AAPL, GOOGL, MSFT, TSLA
- **A股**: 600519.SS (上海), 000001.SZ (深圳)
- **港股**: 0700.HK, 9988.HK

## 开发说明

- 使用ES6+语法
- 遵循React Hooks最佳实践
- 采用Material-UI设计系统
- 支持TypeScript（可选）

## 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

## 许可证

MIT License 
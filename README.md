# Web Project

这是一个使用React和Node.js构建的现代化Web应用程序。

## 项目结构

```
.
├── frontend/                # React前端项目
│   ├── src/
│   │   ├── components/     # React组件
│   │   ├── pages/         # 页面组件
│   │   ├── assets/        # 静态资源
│   │   ├── utils/         # 工具函数
│   │   ├── services/      # API服务
│   │   └── styles/        # 样式文件
│   └── package.json
│
├── backend/                # Node.js后端项目
│   ├── src/
│   │   ├── controllers/   # 控制器
│   │   ├── models/        # 数据模型
│   │   ├── routes/        # 路由
│   │   ├── services/      # 业务逻辑
│   │   ├── utils/         # 工具函数
│   │   └── config/        # 配置文件
│   ├── tests/             # 测试文件
│   └── package.json
│
└── package.json           # 根目录package.json
```

## 开始使用

1. 安装依赖：
```bash
npm run install:all
```

2. 启动开发服务器：
```bash
npm start
```

前端将在 http://localhost:3000 运行
后端将在 http://localhost:5000 运行

## 技术栈

- 前端：React, React Router, Axios
- 后端：Node.js, Express, MongoDB
- 开发工具：Nodemon, Jest 
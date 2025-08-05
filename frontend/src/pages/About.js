import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
} from '@mui/material';
import { Info, Code, Api, Security } from '@mui/icons-material';

const About = () => {
  const features = [
    {
      icon: <Api sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: '实时数据API',
      description: '基于Yahoo Finance API，提供全球股票市场的实时数据',
    },
    {
      icon: <Security sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: '安全可靠',
      description: '采用HTTPS加密传输，确保数据安全',
    },
    {
      icon: <Code sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: '开源技术',
      description: '使用React + Material-UI构建，代码开源透明',
    },
  ];

  return (
    <Container maxWidth="lg" className="container">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
          关于我们
        </Typography>
        <Typography variant="h5" sx={{ color: 'white', mb: 4, opacity: 0.9 }}>
          专业的股票信息分析平台
        </Typography>
      </Box>

      <Card className="card" sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
            <Info sx={{ mr: 2, verticalAlign: 'middle' }} />
            平台介绍
          </Typography>
          <Typography variant="body1" paragraph>
            股票信息平台是一个基于React和Python构建的现代化Web应用，旨在为用户提供全球股票市场的实时数据和分析工具。
          </Typography>
          <Typography variant="body1" paragraph>
            我们整合了Yahoo Finance API，支持美股、A股、港股等全球主要市场的股票数据查询，包括实时价格、技术指标、财务数据等。
          </Typography>
          <Typography variant="body1">
            平台采用响应式设计，支持各种设备访问，为用户提供流畅的使用体验。
          </Typography>
        </CardContent>
      </Card>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Box sx={{ mb: 2 }}>
                {feature.icon}
              </Box>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Card className="card">
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
            技术栈
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                前端技术
              </Typography>
              <Typography variant="body2" paragraph>
                • React 18 - 现代化的前端框架
              </Typography>
              <Typography variant="body2" paragraph>
                • Material-UI - Google Material Design组件库
              </Typography>
              <Typography variant="body2" paragraph>
                • React Router - 单页应用路由管理
              </Typography>
              <Typography variant="body2" paragraph>
                • Axios - HTTP客户端库
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                后端技术
              </Typography>
              <Typography variant="body2" paragraph>
                • Python - 后端编程语言
              </Typography>
              <Typography variant="body2" paragraph>
                • yfinance - Yahoo Finance数据接口
              </Typography>
              <Typography variant="body2" paragraph>
                • FastAPI - 现代化API框架
              </Typography>
              <Typography variant="body2" paragraph>
                • pandas - 数据处理库
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About; 
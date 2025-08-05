import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
} from '@mui/material';
import { Search, TrendingUp, ShowChart, Assessment } from '@mui/icons-material';

const Home = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (stockSymbol.trim()) {
      navigate(`/stock/${stockSymbol.trim().toUpperCase()}`);
    }
  };

  const features = [
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: '实时股票数据',
      description: '获取最新的股票价格、成交量、市值等关键信息',
    },
    {
      icon: <ShowChart sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: '技术指标分析',
      description: '查看移动平均线、成交量变动率等技术指标',
    },
    {
      icon: <Assessment sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: '深度市场分析',
      description: '市盈率、股息率、期权数据等深度分析',
    },
  ];

  return (
    <Container maxWidth="lg" className="container">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
          股票信息平台
        </Typography>
        <Typography variant="h5" sx={{ color: 'white', mb: 4, opacity: 0.9 }}>
          获取全球股票市场的实时数据和深度分析
        </Typography>
      </Box>

      <Card sx={{ mb: 6 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
            搜索股票
          </Typography>
          <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <TextField
              label="股票代码"
              variant="outlined"
              value={stockSymbol}
              onChange={(e) => setStockSymbol(e.target.value)}
              placeholder="例如: AAPL, 600519.SS, 0700.HK"
              sx={{ minWidth: 300 }}
              helperText="支持美股、A股、港股等全球主要市场"
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              startIcon={<Search />}
              disabled={!stockSymbol.trim()}
            >
              搜索
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Grid container spacing={4}>
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

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
          热门股票代码示例
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['AAPL', 'GOOGL', 'MSFT', 'TSLA', '600519.SS', '0700.HK'].map((symbol) => (
            <Button
              key={symbol}
              variant="outlined"
              onClick={() => navigate(`/stock/${symbol}`)}
              sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' } }}
            >
              {symbol}
            </Button>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 
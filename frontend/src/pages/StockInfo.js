import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Alert,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import { ArrowBack, TrendingUp, TrendingDown } from '@mui/icons-material';
import axios from 'axios';

const StockInfo = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get(`/api/stock/${symbol}`);
        setStockData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || '获取股票信息失败');
      } finally {
        setLoading(false);
      }
    };

    if (symbol) {
      fetchStockData();
    }
  }, [symbol]);

  if (loading) {
    return (
      <Container maxWidth="lg" className="container">
        <Box className="loading">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" className="container">
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
        >
          返回首页
        </Button>
      </Container>
    );
  }

  if (!stockData) {
    return (
      <Container maxWidth="lg" className="container">
        <Alert severity="warning">未找到股票数据</Alert>
      </Container>
    );
  }

  const formatValue = (value) => {
    if (typeof value === 'number') {
      return value.toLocaleString();
    }
    return value || 'N/A';
  };

  const getPriceChangeColor = (current, open) => {
    if (!current || !open) return 'default';
    return current > open ? 'success' : current < open ? 'error' : 'default';
  };

  return (
    <Container maxWidth="lg" className="container">
      <Box sx={{ mb: 3 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
          sx={{ mb: 2 }}
        >
          返回首页
        </Button>
        
        <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
          {stockData.名称} ({stockData.代码})
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* 基本信息 */}
        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                基本信息
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">当前价格:</Typography>
                <Typography variant="body1" fontWeight="bold" color="primary">
                  ${formatValue(stockData.当前价格)}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">开盘价:</Typography>
                <Typography variant="body1">
                  ${formatValue(stockData.开盘价)}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">最高价:</Typography>
                <Typography variant="body1" color="success.main">
                  ${formatValue(stockData.最高价)}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">最低价:</Typography>
                <Typography variant="body1" color="error.main">
                  ${formatValue(stockData.最低价)}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">成交量:</Typography>
                <Typography variant="body1">
                  {formatValue(stockData.成交量)}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* 技术指标 */}
        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                技术指标
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">5日均线:</Typography>
                <Typography variant="body1">
                  ${formatValue(stockData['5日均线'])}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">10日均线:</Typography>
                <Typography variant="body1">
                  ${formatValue(stockData['10日均线'])}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">20日均线:</Typography>
                <Typography variant="body1">
                  ${formatValue(stockData['20日均线'])}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">成交量变动率:</Typography>
                <Chip
                  label={`${formatValue(stockData.成交量变动率)}%`}
                  color={stockData.成交量变动率 > 0 ? 'success' : 'error'}
                  size="small"
                />
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">换手率:</Typography>
                <Typography variant="body1">
                  {formatValue(stockData.换手率)}%
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* 财务指标 */}
        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                财务指标
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">市值:</Typography>
                <Typography variant="body1">
                  {stockData.市值}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">市盈率:</Typography>
                <Typography variant="body1">
                  {formatValue(stockData.市盈率)}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">股息率:</Typography>
                <Typography variant="body1">
                  {formatValue(stockData.股息率)}%
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">空仓数量:</Typography>
                <Typography variant="body1">
                  {formatValue(stockData.空仓数量)}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">行业:</Typography>
                <Typography variant="body1">
                  {stockData.行业}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* 期权数据 */}
        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                期权数据
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">看涨期权成交量:</Typography>
                <Typography variant="body1" color="success.main">
                  {formatValue(stockData.看涨期权成交量)}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">看跌期权成交量:</Typography>
                <Typography variant="body1" color="error.main">
                  {formatValue(stockData.看跌期权成交量)}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">最后更新:</Typography>
                <Typography variant="body1">
                  {stockData.最后更新}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StockInfo; 
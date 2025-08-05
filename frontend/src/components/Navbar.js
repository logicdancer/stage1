import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { TrendingUp, Home, Info } from '@mui/icons-material';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页', icon: <Home /> },
    { path: '/about', label: '关于', icon: <Info /> },
  ];

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <TrendingUp sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          股票信息平台
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              startIcon={item.icon}
              sx={{
                backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
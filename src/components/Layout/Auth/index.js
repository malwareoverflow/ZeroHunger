// src/components/AuthLayout.js
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, useTheme } from '@mui/material';

function AuthLayout({ children }) {
  const theme = useTheme();
  const backgroundColor = theme.palette.primary.main; // Assuming the register button uses the primary color

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
       // backgroundColor: backgroundColor,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          backgroundColor: backgroundColor,//'rgba(0, 0, 0, 0.5)',
          color: 'white',
          textAlign: 'center',
          py: 2,
        }}
      >
        <Typography variant="h4">Food Waste Reduction</Typography>
      </Box>
      <Box
        sx={{
          mt: 8,
          p: 3,
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;

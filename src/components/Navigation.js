import React from 'react';
import { Box, Link } from '@mui/material';

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Link href="/" sx={{ ml: 1 }}>Home</Link>
      <Link href="/blog/" sx={{ ml: 1 }}>Blog</Link>
    </Box>
  );
};

export default Navigation;

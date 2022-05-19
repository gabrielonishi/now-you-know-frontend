import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from './menu';
export default function Header() {
  return (
    <Box
    
      sx={{
        width: "100%",
        height: 85,
        backgroundColor: '#FFFF64',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
    <img src="/logo.png" alt="logo" height={69} width={420} />
    <Menu />
    </Box>
  );
}

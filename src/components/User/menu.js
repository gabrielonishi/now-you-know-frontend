import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";

export default function Menu() {
    // function to handle the click event of the button and redirect to corresponding page using Link component
    return (
        <Box
            sx={{
                width: "100%",
                height: 46,
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            
            <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="text" sx={{ color: '#ffffff' }}>GAME</Button>
            </Link>
            <Divider orientation="vertical" variant='middle' flexItem="true" sx={{ width: ".5px",  backgroundColor: '#ffffff', margin:" 0 1 "}} />
            <Link to="howtoplay" style={{ textDecoration: 'none' }}>
            <Button variant="text" sx={{ color: '#ffffff'}}>HOW TO PLAY</Button>
            </Link>
            
            <Divider orientation="vertical" variant='middle' flexItem="true" sx={{ width: ".5px",  backgroundColor: '#ffffff',  margin:" 0 1 "}} />
            <Link to="about" style={{ textDecoration: 'none' }}>
            <Button variant="text" sx={{ color: '#ffffff' }}>CREDITS</Button>
            </Link>
        </Box>
    );
}

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HowToPlay() {
    const theme = {
        typography: {
            fontFamily: '"Open Sans", sans-serif',
        }
    };

        
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '200px',
                marginTop: "30px",
                marginBottom: "30px",
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", position: "relative", top: "15px", fontFamily:" 'Open Sans', sans-serif"}}>
                <Typography theme={theme} sx={{ color: '#000000', fontSize: "80px", textAlign: "left", fontWeight:'600' }}>
                    How
                </Typography>
                <Typography theme={theme} sx={{ color: '#000000', fontSize: "80px", textAlign: "left", fontWeight:'600' }}>
                    To
                </Typography>
                <Typography theme={theme} sx={{ color: '#000000', fontSize: "80px", textAlign: "left",fontWeight:'600' }}>
                    Play
                </Typography>
            </Box>

            <Box sx={{ backgroundColor: "#000000" }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", border: "1px solid black", backgroundColor: "#ffffff", width: "600px", height: "auto", padding: "20px", position: "relative", top: "15px", left: "15px" }}>
                    <Typography theme={theme} variant="h2" sx={{ color: '#000000', fontSize: "25px", textAlign: "left", fontWeight:"300" }}>
                        Now You Know is a simple game designed to test your knowledge on your favorite artist. Write the artist of choice and your guess for which songs pop-up when you search them on Genius.
                        If you get the right song on the right position, you get 2 points;
                        If you get a song on the top 5, but at the wrong position, you get 1.
                        <b>Good luck!</b>
                    </Typography>
                </Box>
            </Box  >
        </Box>
    );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function UpText() {
    const theme = {
        typography: {
            fontFamily: '"Open Sans", sans-serif',
        }
    };
    return (
        <Box
            sx={{
                width: "100%",
                height: 150,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '200px',
                marginTop: "30px",
                marginBottom: "30px",
            }}
        >
            <Box  sx={{ display: "flex", flexDirection: "column", position: "relative", top: "30px"}}>
                <Typography theme={theme} sx={{ color: '#000000', fontSize: "50px", textAlign: "left" }}>
                    Do you really know
                </Typography>
                <Typography theme={theme} sx={{ color: '#000000', fontSize: "50px", textAlign: "left" }}>
                    your favorite artist?
                </Typography>
            </Box>

            <Box sx={{ backgroundColor: "#FFFF64"}}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#000000", width: "600px", height: "100px", padding: "20px", position: "relative", top: "30px", right: "30px" }}>
                    <Typography theme={theme} variant="h2" sx={{ color: '#ffffff', fontSize: "25px", textAlign: "left", fontWeight:"bold" }}>
                        What songs do you think pops-up when you search your favorite artist on Genius?
                    </Typography>
                </Box>
            </Box  >
        </Box>


    );
}

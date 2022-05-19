import React from 'react';
import Animation from '../../static/animation.gif';
import { Box} from '@mui/system';
import Typography from '@mui/material/Typography';
export default function About() {
    const theme = {
        typography: {
            fontFamily: '"Open Sans", sans-serif',
        }
    };
    return (
        <Box 
        sx={{
            width: "100%",
            height: "80%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
        }}>
        <img src={Animation} height={500} width={500} />
        <Typography theme={theme} sx={{textAlign:"left", fontWeight:"500", fontSize:"24px"}}>
            Oi, esse é o projeto 2 da Disciplina de Tecnologia Web.<br/>
            O qual foi criado por nós, <b>Gabriel Onishi</b> e <b>Lucas Fonseca</b>.<br/>
            A aplicação consiste em um game para testar se o usuário sabe a ordem das músicas de seu artista preferido.<br/>
        </Typography>
        </Box>
    )
}


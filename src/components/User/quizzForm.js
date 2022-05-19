import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { inputClasses } from '@mui/material';
import axios from "axios";

export default function Quizzform() {
    let score = 0;

    const [displayStatus, setDisplay] = useState({isActive: true, finalScore:0, average: 0});
    const [realHits, setRealHits] = useState({
        hit1:"",
        hit2:"",
        hit3:"",
        hit4:"",
        hit5:""
    })

    const normalize_name = (name) => {
        let lower_name = name.toLowerCase();
        let name_list = lower_name.split(" ");
        return name_list.join("_");
    }

    const [dados, setDados] = useState({
        artistName:"",
        hit1:"",
        hit2:"",
        hit3:"",
        hit4:"",
        hit5:""
    });

    const defineArtista = (event) => {
        setDados({
            ...dados,
            [event.target.name]:event.target.value});
    }

    const submitData = (event) => {
        // manejando opções da api do genius
        const options = {
            method: 'GET',
            url: 'https://genius.p.rapidapi.com/search',
            params: {q: dados.artistName},
            headers: {
              'X-RapidAPI-Host': 'genius.p.rapidapi.com',
              'X-RapidAPI-Key': 'cc29a73f58mshbcfb2885876be2fp1b0d18jsn2bf2b047e3d0'
            }
          };

          axios.request(options).then(function (response) {
            // recolhendo os dados das músicas mais tocadas
            const realHit1 = response.data.response.hits[0].result.title;
            const realHit2 = response.data.response.hits[1].result.title;
            const realHit3 = response.data.response.hits[2].result.title; 
            const realHit4 = response.data.response.hits[3].result.title; 
            const realHit5 = response.data.response.hits[4].result.title;
            setRealHits({
                hit1: realHit1,
                hit2: realHit2,
                hit3: realHit3,
                hit4: realHit4,
                hit5: realHit5
            })

            // atribuindo um score a partir das regras do jogo
            if (normalize_name(realHit1) === normalize_name(dados.hit1)){
                score = score + 2;
            }
            if (normalize_name(realHit2) === normalize_name(dados.hit2)){
                score = score + 2;
            }
            if (normalize_name(realHit3) === normalize_name(dados.hit3)){
                score = score + 2;
            }
            if (normalize_name(realHit4) === normalize_name(dados.hit4)){
                score = score + 2;
            }
            if (normalize_name(realHit5) === normalize_name(dados.hit5)){
                score = score + 2;
            }
            if (normalize_name(realHit1) === normalize_name(dados.hit2) || normalize_name(realHit1) === normalize_name(dados.hit3) || normalize_name(realHit1) === normalize_name(dados.hit4) || normalize_name(realHit1) === normalize_name(dados.hit5)){
                score = score + 1;
            }
            if (normalize_name(realHit2) === normalize_name(dados.hit1) || normalize_name(realHit2) === normalize_name(dados.hit3) || normalize_name(realHit2) === normalize_name(dados.hit4) || normalize_name(realHit2) === normalize_name(dados.hit5)){
                score = score + 1;
            }
            if (normalize_name(realHit3) === normalize_name(dados.hit2) || normalize_name(realHit3) === normalize_name(dados.hit1) || normalize_name(realHit3) === normalize_name(dados.hit4) || normalize_name(realHit3) === normalize_name(dados.hit5)){
                score = score + 1;
            }
            if (normalize_name(realHit4) === normalize_name(dados.hit2) || normalize_name(realHit4) === normalize_name(dados.hit3) || normalize_name(realHit4) === normalize_name(dados.hit1) || normalize_name(realHit4) === normalize_name(dados.hit5)){
                score = score + 1;
            }
            if (normalize_name(realHit5) === normalize_name(dados.hit2) || normalize_name(realHit5) === normalize_name(dados.hit3) || normalize_name(realHit5) === normalize_name(dados.hit4) || normalize_name(realHit5) === normalize_name(dados.hit1)){
                score = score + 1;
            }
            
            // normalizando o nome para conseguir acessar à api (mesmo algorítimo do backend)
            const normalized_name = normalize_name(dados.artistName);

            //fazendo post para a api
            axios.post(`https://serene-peak-43585.herokuapp.com/api/${normalized_name}/tries/`, {"score":score}).then(
                response => axios.get(`https://serene-peak-43585.herokuapp.com/api/${normalized_name}/`).then(
                    response => {
                        setDisplay({isActive: false, finalScore:score, average: response.data.average_rating})
                        console.log(response.data.average_rating)
                    }
                )
            )
        }).catch(function (error) {
            console.error(error);
        });
    }
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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: "20px"
            }}
        >
            <Box component="form" sx={{ width: "100%", display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                    <Typography theme={theme} display="inline" sx={{ color: '#000000', fontSize: "40px" }}>
                        Artist
                    </Typography>
                    <Typography theme={theme} display="inline" sx={{ color: '#000000', fontSize: "40px" }}>
                        Name:
                    </Typography>
                </Box>
                <TextField 
                variant="standard" 
                InputProps={{ disableUnderline: true, style: { fontSize: "30px", textAlign: "center" } }} 
                required id="artistName" 
                name="artistName" 
                sx={{ width: "400px", height: "50px", backgroundColor: "#FFFF64", borderRadius: "2px", padding: "0 .5rem" }} 
                onChange={defineArtista}
                value={dados.artistName}
                />
            </Box>
            <Box component="form" sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "flex-end" }}>
                    <Typography theme={theme} display="inline" sx={{ color: '#000000', fontSize: "25px", height: "25px" }}>
                        #1 Hit:
                    </Typography>
                    <TextField 
                    InputProps={{ style: { fontSize: "25px", textAlign: "end", padding: "0 .5rem" } }} 
                    variant="standard" 
                    margin="normal" 
                    required id="hit1" 
                    name="hit1" 
                    sx={{ width: "400px", margin: "0px" }} 
                    onChange={defineArtista}
                    value={dados.hit1}
                    />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "flex-end" }}>
                    <Typography theme={theme} display="inline" sx={{ color: '#000000', fontSize: "25px", height: "25px" }}>
                        #2 Hit:
                    </Typography>
                    <TextField 
                    InputProps={{ style: { fontSize: "25px", textAlign: "end", padding: "0 .5rem" } }} 
                    variant="standard" 
                    margin="normal" 
                    required 
                    id="hit2" 
                    name="hit2" 
                    sx={{ width: "400px", margin: "0px" }} 
                    onChange={defineArtista}
                    value={dados.hit2}
                    />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "flex-end" }}>
                    <Typography theme={theme} display="inline" sx={{ color: '#000000', fontSize: "25px", height: "25px" }}>
                        #3 Hit:
                    </Typography>
                    <TextField 
                    InputProps={{ style: { fontSize: "25px", textAlign: "end", padding: "0 .5rem" } }} 
                    variant="standard" 
                    margin="normal" 
                    required 
                    id="hit3" 
                    name="hit3" 
                    sx={{ width: "400px", margin: "0px" }} 
                    onChange={defineArtista}
                    value={dados.hit3}
                    />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "flex-end" }}>
                    <Typography  theme={theme} display="inline" sx={{ color: '#000000', fontSize: "25px", height: "25px" }}>
                        #4 Hit:
                    </Typography>
                    <TextField 
                    InputProps={{ style: { fontSize: "25px", textAlign: "end", padding: "0 .5rem" } }} 
                    variant="standard" 
                    margin="normal" 
                    required 
                    id="hit4" 
                    name="hit4" 
                    sx={{ width: "400px", margin: "0px" }}
                    onChange={defineArtista}
                    value={dados.hit4}
                    />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "flex-end" }}>
                    <Typography theme={theme}  display="inline" sx={{ color: '#000000', fontSize: "25px", height: "25px" }}>
                        #5 Hit:
                    </Typography>
                    <TextField 
                    InputProps={{ style: { fontSize: "25px", textAlign: "end", padding: "0 .5rem" } }} 
                    variant="standard" 
                    margin="normal" 
                    required 
                    id="hit5" 
                    name="hit5" 
                    sx={{ width: "400px", margin: "0px" }}
                    onChange={defineArtista}
                    value={dados.hit5}
                    />
                </Box>
            </Box>
            <Box>
                {displayStatus.isActive?(
                    <Button
                        type="submit"
                        variant="text" 
                        disableRipple 
                        touchRippleColor="red" 
                        sx={{color:"#000000", height:"fit-content",fontFamily:"Open Sans",fontWeight:"bold", fontSize: "25px", marginTop:"30px"}}
                        onClick={submitData}>
                        SEND
                    </Button>
                ) : (
                    <Box>
                        <Typography sx={{color:"#000000", height:"fit-content",fontWeight:"bold", fontSize: "25px", marginTop:"30px"}}>Your Score: {displayStatus.finalScore}</Typography>
                        <Typography sx={{color:"#000000", height:"fit-content", fontSize: "20", marginTop:"30px"}}>Average for this artist: {displayStatus.average.toFixed(1)}</Typography>
                        <Typography sx={{color:"#000000", height:"fit-content",fontWeight:"bold", fontSize: "25px", marginTop:"30px"}}>Original Top 5: </Typography>
                        <Typography>#1: {realHits.hit1}</Typography>
                        <Typography>#2: {realHits.hit2}</Typography>
                        <Typography>#3: {realHits.hit3}</Typography>
                        <Typography>#4: {realHits.hit4}</Typography>
                        <Typography>#5: {realHits.hit5}</Typography>
                    </Box>
                )}
            </Box>
        </Box>

    );
}
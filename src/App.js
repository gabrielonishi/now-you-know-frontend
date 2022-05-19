import Header from './components/User/header';
import Home from './components/User/homePage';
import About from './components/User/aboutPage';
import HowToPlay from './components/User/howToPlayPage';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { Box } from '@mui/system';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box      >
      <Header/>
      <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
      </Routes>
      </Box>
      </Box>
    </div>
  );
}

export default App;

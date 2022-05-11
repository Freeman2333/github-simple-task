import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { Paper } from '@mui/material';
import Header from './components/Header';
import Repos from './components/Repos.tsx';
import Developers from './components/Developers.tsx';
import theme from './theme';
import './App.sass';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box
          sx={{
            textAlign: 'center',
            padding: '30px 0',
          }}
        >
          <Typography variant="h2" component="h2" sx={{ fontWeight: 600 }}>
            Trending
          </Typography>
          <Typography variant="body2" component="span">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Box>
        <Divider />
        <Box p={5}>
          <BrowserRouter>
            <Paper variant="outlined" sx={{ maxWidth: 900, margin: '0 auto' }}>
              <Header />

              <Routes>
                <Route index path="/" element={<Repos />} />
                <Route path="/developers" element={<Developers />} />
              </Routes>
            </Paper>
          </BrowserRouter>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;

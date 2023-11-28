
import {  Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './header';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';



function App() {
  const [darkmode, setDarkMode] = useState(false);
  const paletteType = darkmode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea': '#121212'
      }
    }
  });


  function handThemeChange() {
    setDarkMode(!darkmode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkmode={darkmode} setDarkMode={handThemeChange}  />
      <Container>
        <Outlet />
      </Container>
     
  </ThemeProvider>
  )
}

export default App

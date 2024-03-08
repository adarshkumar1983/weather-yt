import React from 'react';
import WeatherComponent from './components/WeatherData';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <WeatherComponent />
  </ThemeProvider>
  );
};

export default App;

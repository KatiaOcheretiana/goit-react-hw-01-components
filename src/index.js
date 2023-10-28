import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';



const theme = {
  colors: {
    white: 'white',
    gray: 'gray',
    lightsteelblue: 'lightsteelblue',
    black: '#111',
    lightGray: 'rgb(245,245,245)',
  }
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
  </React.StrictMode>
);



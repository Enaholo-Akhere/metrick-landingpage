import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    
  components: {
     MuiInputBase: {
       styleOverrides: {
        input: {
          "&::placeholder": {
            color: "black"
          },
          color: "white", // if you also want to change the color of the input, this is the prop you'd use
        },
         root: {
           "&:after":{
          borderColor: "grey !important",
          color: 'white',
        },
           "&:before":{
             borderBottom:"1px solid grey !important"
            },
         },
       },
     },
   },
 
 })
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import Box from '@mui/material/Box';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  return (
    <Box className="App">
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
    </Box>
  );
}

export default App;

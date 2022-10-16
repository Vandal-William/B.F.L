// == Import
import { ThemeProvider} from '@mui/material/styles';
import theme from '../../selectors/Theme'
// == Composant
import Header from '../Header';
import Home from '../Home'
function App() {
  return (
    <ThemeProvider theme={theme}>

      <Header />
      <Home />

    </ThemeProvider>

  );
}

// == Export
export default App;

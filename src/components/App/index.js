// == Import
import { ThemeProvider} from '@mui/material/styles';
import theme from '../../selectors/Theme'
// == Composant
function App() {
  return (
    <ThemeProvider theme={theme}>

      <h1>Composant : App</h1>

    </ThemeProvider>

  );
}

// == Export
export default App;

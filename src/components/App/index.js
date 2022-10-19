// == Import
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider} from '@mui/material/styles';
import theme from '../../selectors/Theme'
// == Composant
import Home from '../Home';
import Books from '../Books';
import BooksComplete from '../Books/BooksComplete';
import BooksReading from '../Books/BooksReading';
import BooksWishlist from '../Books/BooksWishlist';
import Login from '../Login';
import Register from '../Register'
import NavLinkMobile from '../NavLinkMobile'

function App() {
  return (
    <ThemeProvider theme={theme}>
   
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/books' element={<Books />} /> 
        <Route path='/reading' element={<BooksReading />} /> 
        <Route path='/complete' element={<BooksComplete />} /> 
        <Route path='/wishlist' element={<BooksWishlist />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Register />} /> 
        <Route path='/nav' element={<NavLinkMobile />} /> 
      </Routes>
      
    </ThemeProvider>

  );
}

// == Export
export default App;

// == Import
import { Grid, Container} from '@mui/material';
import Header from '../../Header';
import NavBar from '../../NavBar';

// == Composant
import BookWish from './BookWish'


function BooksWishlist () {
  return (
    <>
      <NavBar />
      <Header />
      <Grid container sx={{justifyContent: 'center'}}>
        <Container >

        <BookWish />

        </Container>

      </Grid>
    </>




  );

}

// == Export
export default BooksWishlist;

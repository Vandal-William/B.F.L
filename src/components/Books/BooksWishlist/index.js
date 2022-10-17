// == Import
import { Grid, Container} from '@mui/material';
import Header from '../../Header';

// == Composant
import BookWish from './BookWish'


function BooksWishlist () {
  return (
    <>
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

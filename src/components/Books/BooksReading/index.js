// == Import
import { Grid, Container} from '@mui/material';
import Header from '../../Header';
import NavBar from '../../NavBar';

// == Composant
import BookReading from './BookReading'

function BooksReading () {
  return (
    <>
      <NavBar />
      <Header/>
      <Grid container sx={{justifyContent: 'center'}}>
        <Container >

          <BookReading />

        </Container>

      </Grid>

    </>




  );

}

// == Export
export default BooksReading;

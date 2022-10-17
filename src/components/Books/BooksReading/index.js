// == Import
import { Grid, Container} from '@mui/material';
import Header from '../../Header';

// == Composant
import BookReading from './BookReading'

function BooksReading () {
  return (
    <>
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

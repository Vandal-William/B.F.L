// == Import
import { Grid, Container} from '@mui/material';
import Header from '../Header';

// == Composant
import Book from './Book'


function Books () {
  return (
    <>
      <Header/>
      <Grid container sx={{justifyContent: 'center'}}>
        <Container >

          <Book />

        </Container>

      </Grid>

    </>




  );

}

// == Export
export default Books;

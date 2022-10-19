// == Import
import { Grid, Container} from '@mui/material';
import Header from '../Header';
import NavBar from '../NavBar';

// == Composant
import Book from './Book'


function Books () {
  return (
    <>
      <NavBar />
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

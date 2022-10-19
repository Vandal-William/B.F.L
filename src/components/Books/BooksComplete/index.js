// == Import
import { Grid, Container} from '@mui/material';
import Header from '../../Header';
import NavBar from '../../NavBar';



// == Composant
import BookComplete from './BookComplete';


function BooksComplete () {
  return (
    <>
      <NavBar />
      <Header />
      <Grid container sx={{justifyContent: 'center'}}>
        <Container >

        <BookComplete />

        </Container>

      </Grid>
    </>




  );

}

// == Export
export default BooksComplete;

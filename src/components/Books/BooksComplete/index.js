// == Import
import { Grid, Container} from '@mui/material';
import Header from '../../Header';



// == Composant
import BookComplete from './BookComplete';


function BooksComplete () {
  return (
    <>
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

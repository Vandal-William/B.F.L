// == Import
import { Grid, Container} from '@mui/material';
import { styled } from '@mui/system';
import { Box, Typography} from '@mui/material';
import NavBar from '../../NavBar';

// == Composant
import BookReading from './BookReading'
import readingImage from '../../../asset/Images/headerImages/reading/readingImage.jpg';

function BooksReading () {


  const BoxImageHeader = styled(Box)(({ theme }) => ({
   
  }));


  return (
    <>
      <NavBar />
      <BoxImageHeader component='header'  sx={{ height: '50rem',  background : `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) ), url(${readingImage}) black`, backgroundSize: 'cover'  }}>
      <Grid container sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '50rem'
      
      }}
      >
          
      <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> En cours de lecture</Typography>
                   

    </Grid>
      </BoxImageHeader>
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

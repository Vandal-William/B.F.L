// == Import
import { Grid, Container} from '@mui/material';
import { styled } from '@mui/system';
import { Box, Typography} from '@mui/material';
import NavBar from '../../NavBar';

// == Composant
import BookWish from './BookWish'
import wishlistImage from '../../../asset/Images/headerImages/wishlist/wishlistImage.jpg';


function BooksWishlist () {

  const BoxImageHeader = styled(Box)(({ theme }) => ({
   
  }));

  return (
    <>
      <NavBar />
      <BoxImageHeader component='header'  sx={{ height: '50rem',  background : `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) ), url(${wishlistImage}) black`, backgroundSize: 'cover'  }}>
      <Grid container sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '50rem'
      
      }}
      >
        
      <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Bientôt dans ma bibliothèque </Typography>       

    </Grid>
      </BoxImageHeader>

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

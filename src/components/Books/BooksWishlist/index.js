// == Import
import { Grid, Container} from '@mui/material';
import { styled } from '@mui/system';
import { Box, Typography} from '@mui/material';
import NavBar from '../../NavBar';
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// == Composant
import './style.scss'
import BookWish from './BookWish'
import wishlistImage from '../../../asset/Images/headerImages/wishlist/wishlistImage.jpg';


function BooksWishlist () {

  const BoxImageHeader = styled(Box)(({ theme }) => ({
   
  }));
  const books = useSelector(state => state.books.books)
  const wishlist = books.filter(book => book.tag.name === 'Wishlist')
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
          <Carousel
            autoPlay
            infiniteLoop
            showIndicators={false}
            showStatus={false}
            
          >
              {wishlist.map(book =>(
               <Box
                component='div'
                key={book.Num}
                sx={{width: '30%', marginTop: '4rem', boxShadow: '0.1rem, 0.1rem, 0.2rem black'}}
               >
                <img src={book.Image} alt={book.Titre} />
               </Box>

              ))}
              
          </Carousel>
  

        </Container>

      </Grid>
    </>




  );

}

// == Export
export default BooksWishlist;

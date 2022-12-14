// == Import
import { Grid, Container} from '@mui/material';
import { styled } from '@mui/system';
import { Box, Typography} from '@mui/material';
import NavBar from '../../NavBar';
import { useSelector } from 'react-redux';



// == Composant
import BookComplete from './BookComplete';
import completeImage from '../../../asset/Images/headerImages/complete/completeImage.jpg';


function BooksComplete () {

  const BoxImageHeader = styled(Box)(({ theme }) => ({
   
  }));

  const books = useSelector(state => state.books.books)
  const complete = books.filter(book => book.tag.name === 'Lecture terminer')
  return (
    <>
      <NavBar />
      <BoxImageHeader component='header'  sx={{ height: '50rem',  background : `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) ), url(${completeImage}) black`, backgroundSize: 'cover'  }}>
      <Grid container sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '50rem'
      
      }}
      >          
      <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Lectures terminées </Typography>
                 

    </Grid>
      </BoxImageHeader>
      <Grid container sx={{justifyContent: 'center'}}>
        <Container >

        <Grid container sx={{justifyContent: 'center', gap: '1rem', padding: '1rem', marginTop: '5rem'}}>
        {complete.map(book =>(
          <BookComplete 
            key={book.Num}
            image={book.Image}
            title={book.Titre}
          />

        ))}
        </Grid>

        </Container>

      </Grid>
    </>




  );

}

// == Export
export default BooksComplete;

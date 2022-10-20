// == Import
import * as React from 'react';
import { styled } from '@mui/system';
import { Box, Typography} from '@mui/material';
import { Grid, Container} from '@mui/material';
import NavBar from '../NavBar';


// == Composant
import Book from './Book'
import booksImage from '../../asset/Images/headerImages/books/booksImage.jpg';
import { useSelector } from 'react-redux';


function Books () {

  const BoxImageHeader = styled(Box)(({ theme }) => ({
   
  }));

  const books = useSelector(state => state.books.books)

  return (
    <>
      <NavBar />
      <BoxImageHeader component='header'  sx={{ height: '50rem',  background : `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1) ), url(${booksImage}) black`, backgroundSize: 'cover'  }}>
      <Grid container sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '50rem'
      
      }}
      >
          
        <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Tous mes livres </Typography>
               
    </Grid>
      </BoxImageHeader>
      
      <Grid container sx={{justifyContent: 'center'}}>
        <Container >

        <Grid container sx={{justifyContent: 'center', gap: '1rem', padding: '1rem', marginTop: '5rem'}}>
        {books.map(book =>(
          <Book 
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
export default Books;

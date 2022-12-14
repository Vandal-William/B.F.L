// == Import
import { Grid, Container, Typography, Card, CardContent} from '@mui/material';
import { Box } from '@mui/system';


// == Composant
import Header from '../Header'
import NewBooks from '../Books/NewBooks' 

import './style.scss'
import NavBar from '../NavBar';
import { useSelector } from 'react-redux';

function Home () {
  const books = useSelector(state => state.books.books)
  const complete = books.filter(book => book.tag.name === 'Lecture terminer')
  const reading = books.filter(book => book.tag.name === 'Lecture en cours')
  const wishlist = books.filter(book => book.tag.name === 'Wishlist')
  return (
    <>
      <NavBar />
      <Header />
      <Grid container sx={{justifyContent: 'center'}}>
        <Container >

          <Typography variant='h3' sx={{margin: '3rem'}}>Ma bibliothèque </Typography>


            <Box sx={{width: '100%'}}>
              <Grid container sx={{justifyContent: 'center', width: '100%'}} spacing={2}>

                    <Grid item xs={11} md={5}>
                      <Card>
                        <CardContent>
                          <Typography variant='h3' sx={{textAlign: 'center', fontWeight: 'bold', color: '#605c6a'}}>{books.length}+ </Typography>
                          <Typography sx={{textAlign: 'center', color: 'gray'}}>Livres dans ma bibliothèque</Typography>
                        </CardContent>
                      </Card>
                    </Grid> 

                    <Grid item xs={11} md={5}>
                      <Card>
                        <CardContent>
                          <Typography variant='h3' sx={{textAlign: 'center', fontWeight: 'bold', color: '#605c6a' }}>{complete.length}+</Typography>
                          <Typography sx={{textAlign: 'center', color: 'gray'}}>Livres terminer</Typography>
                        </CardContent>
                      </Card>
                    </Grid> 

                    <Grid item xs={11} md={5}>
                      <Card>
                        <CardContent>
                          <Typography variant='h3' sx={{textAlign: 'center', fontWeight: 'bold', color: '#605c6a'}}>{reading.length}+</Typography>
                          <Typography sx={{textAlign: 'center', color: 'gray'}}>Livres en cours de lecture</Typography>
                        </CardContent>
                      </Card>
                    </Grid> 

                    <Grid item xs={11} md={5}>
                      <Card>
                        <CardContent>
                          <Typography variant='h3' sx={{textAlign: 'center', fontWeight: 'bold', color: '#605c6a'}}>{wishlist.length}+</Typography>
                          <Typography sx={{textAlign: 'center', color: 'gray'}}>Livre dans ma Whishlist</Typography>
                        </CardContent>
                      </Card>
                    </Grid> 
              </Grid>
            </Box>

            <Box sx={{bgcolor: '#605c6a', marginBottom: '5rem', height: '45rem'}}>

              <Typography variant='h3' sx={{margin: '3rem', paddingTop: '3rem', color: 'white'}}>Nouveautées </Typography>

                <NewBooks />

            </Box>

        </Container>

      </Grid>
    </>




  );

}

// == Export
export default Home;

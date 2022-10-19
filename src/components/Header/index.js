// == Import
import { Box, Grid, Typography} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

// == Composant
import Input from '../Input'
import { useParams } from 'react-router-dom';
import homeImage from '../../asset/Images/headerImages/home/homeImage.jpg';
import booksImage from '../../asset/Images/headerImages/books/booksImage.jpg';
import readingImage from '../../asset/Images/headerImages/reading/readingImage.jpg';
import completeImage from '../../asset/Images/headerImages/complete/completeImage.jpg';
import wishlistImage from '../../asset/Images/headerImages/wishlist/wishlistImage.jpg';



function Header() {
  const params = useParams();
  console.log(params)
  const [term, setTerm] = React.useState('');

// ======================================== Media query =======================================

  const BoxImageHeader = styled(Box)(({ theme }) => ({
   
  }));


  const InputSearch = styled(Input)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'md')]: {
      width: '60%'
    },
  }));

  const InputSelect = styled(Input)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '35%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '15%'
    },
  }));

// ======================================== / Media query =======================================

  const searchTerm = [
    {
      value: 'Auteur',
      label: 'Auteur',
    },
    {
      value: 'ISBN',
      label: 'ISBN',
    },
    {
      value: 'Titre',
      label: 'Titre',
    },
    
  ];

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
  <>
  {!params.books && (
    <BoxImageHeader component='header'  sx={{ height: '50rem',  background : `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) ), url(${homeImage}) `, backgroundSize: 'cover'  }}>
      <Grid container sx={{
        alignItems: 'start',
        justifyContent: 'center',
        height: '50rem'
      
      }}
      >
          {!params.books && (
              <Box component='form' sx={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '15rem'}}> 
                <InputSearch name='search' variant='filled' label='Rechercher un livre' sx={{width: '50%', bgcolor: 'white' }}>
                <SearchIcon sx={{color: 'black'}}/>
                </InputSearch>

                <InputSelect
                  name='searchSelect'
                  id="outlined-select-currency"
                  select
                  label='Par'
                  value={term}
                  onChange={handleChange}
                  variant='filled'
                  sx={{bgcolor: 'lightblue', width: '10%', color: 'white'}}
                  >
                  {searchTerm.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </InputSelect>
              </Box>
          )}
          {params.books === 'books' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Tous mes livres </Typography>}
          {params.books === 'reading' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> En cours de lecture</Typography>} 
          {params.books === 'complete' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Lectures terminées </Typography>}
          {params.books === 'wishlist' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Bientôt dans ma bibliothèque </Typography>}          

    </Grid>
      </BoxImageHeader>
  )}
  {params.books === 'books' && (
    <BoxImageHeader component='header'  sx={{ height: '50rem',  background : `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1) ), url(${booksImage}) black`, backgroundSize: 'cover'  }}>
      <Grid container sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '50rem'
      
      }}
      >
          {!params.books && (
              <Box component='form' sx={{width: '100%', display: 'flex', justifyContent: 'center'}}> 
                <InputSearch name='search' variant='filled' sx={{width: '50%', bgcolor: 'white' }}>
                <SearchIcon sx={{color: 'black'}}/>
                </InputSearch>

                <InputSelect
                  name='searchSelect'
                  id="outlined-select-currency"
                  select
                  label='Recherche'
                  value={term}
                  onChange={handleChange}
                  variant='filled'
                  sx={{bgcolor: 'lightblue', width: '10%', color: 'white'}}
                  >
                  {searchTerm.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </InputSelect>
              </Box>
          )}
          {params.books === 'books' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Tous mes livres </Typography>}
          {params.books === 'reading' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> En cours de lecture</Typography>} 
          {params.books === 'complete' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Lectures terminées </Typography>}
          {params.books === 'wishlist' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Bientôt dans ma bibliothèque </Typography>}          

    </Grid>
      </BoxImageHeader>
  )}

  {params.books === 'reading' && (
    <BoxImageHeader component='header'  sx={{ height: '50rem',  background : `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) ), url(${readingImage}) black`, backgroundSize: 'cover'  }}>
      <Grid container sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '50rem'
      
      }}
      >
          {!params.books && (
              <Box component='form' sx={{width: '100%', display: 'flex', justifyContent: 'center'}}> 
                <InputSearch name='search' variant='filled' sx={{width: '50%', bgcolor: 'white' }}>
                <SearchIcon sx={{color: 'black'}}/>
                </InputSearch>

                <InputSelect
                  name='searchSelect'
                  id="outlined-select-currency"
                  select
                  label='Recherche'
                  value={term}
                  onChange={handleChange}
                  variant='filled'
                  sx={{bgcolor: 'lightblue', width: '10%', color: 'white'}}
                  >
                  {searchTerm.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </InputSelect>
              </Box>
          )}
          {params.books === 'books' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Tous mes livres </Typography>}
          {params.books === 'reading' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> En cours de lecture</Typography>} 
          {params.books === 'complete' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Lectures terminées </Typography>}
          {params.books === 'wishlist' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Bientôt dans ma bibliothèque </Typography>}          

    </Grid>
      </BoxImageHeader>
  )}

  {params.books === 'complete' && (
    <BoxImageHeader component='header'  sx={{ height: '50rem',  background : `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) ), url(${completeImage}) black`, backgroundSize: 'cover'  }}>
      <Grid container sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '50rem'
      
      }}
      >
          {!params.books && (
              <Box component='form' sx={{width: '100%', display: 'flex', justifyContent: 'center'}}> 
                <InputSearch name='search' variant='filled' sx={{width: '50%', bgcolor: 'white' }}>
                <SearchIcon sx={{color: 'black'}}/>
                </InputSearch>

                <InputSelect
                  name='searchSelect'
                  id="outlined-select-currency"
                  select
                  label='Recherche'
                  value={term}
                  onChange={handleChange}
                  variant='filled'
                  sx={{bgcolor: 'lightblue', width: '10%', color: 'white'}}
                  >
                  {searchTerm.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </InputSelect>
              </Box>
          )}
          {params.books === 'books' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Tous mes livres </Typography>}
          {params.books === 'reading' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> En cours de lecture</Typography>} 
          {params.books === 'complete' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Lectures terminées </Typography>}
          {params.books === 'wishlist' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Bientôt dans ma bibliothèque </Typography>}          

    </Grid>
      </BoxImageHeader>
  )}

  {params.books === 'wishlist' && (
    <BoxImageHeader component='header'  sx={{ height: '50rem',  background : `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) ), url(${wishlistImage}) black`, backgroundSize: 'cover'  }}>
      <Grid container sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '50rem'
      
      }}
      >
          {!params.books && (
              <Box component='form' sx={{width: '100%', display: 'flex', justifyContent: 'center'}}> 
                <InputSearch name='search' variant='filled' sx={{width: '50%', bgcolor: 'white' }}>
                <SearchIcon sx={{color: 'black'}}/>
                </InputSearch>

                <InputSelect
                  name='searchSelect'
                  id="outlined-select-currency"
                  select
                  label='Recherche'
                  value={term}
                  onChange={handleChange}
                  variant='filled'
                  sx={{bgcolor: 'lightblue', width: '10%', color: 'white'}}
                  >
                  {searchTerm.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </InputSelect>
              </Box>
          )}
          {params.books === 'books' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Tous mes livres </Typography>}
          {params.books === 'reading' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> En cours de lecture</Typography>} 
          {params.books === 'complete' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Lectures terminées </Typography>}
          {params.books === 'wishlist' && <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}> Bientôt dans ma bibliothèque </Typography>}          

    </Grid>
      </BoxImageHeader>
  )}
  </>

  );
}

// == Export
export default Header;

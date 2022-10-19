// == Import
import { Box, Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

// == Composant
import Input from '../Input'
import homeImage from '../../asset/Images/headerImages/home/homeImage.jpg';

function Header() {

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

    <BoxImageHeader component='header'  sx={{ height: '50rem',  background : `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) ), url(${homeImage}) `, backgroundSize: 'cover'  }}>
      <Grid container sx={{
        alignItems: 'start',
        justifyContent: 'center',
        height: '50rem'
        }}
        >
        
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
      </Grid>
    </BoxImageHeader>

  </>

  );
}

// == Export
export default Header;

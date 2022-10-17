// == Import
import { Box, Grid, TextField, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

// == Composant
import Input from '../Input'
import xsHeaderImage from '../../asset/Images/header/xs-header-image.jpg';
import lgHeaderImage from '../../asset/Images/header/lg-header-image.jpg';
import xlHeaderImage from '../../asset/Images/header/xl-header-image.jpg';



function Header() {

  const [term, setTerm] = React.useState('');

// ======================================== Media query =======================================

  const BoxImageHeader = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'md')]: {
      background: `url(${xsHeaderImage}) no-repeat`,
      backgroundSize: 'cover',
      
    },
    [theme.breakpoints.up('md')]: {
      background: `url(${lgHeaderImage}) no-repeat`,
      backgroundSize: 'cover',
      
    },
    [theme.breakpoints.up('xl')]: {
      background: `url(${xlHeaderImage}) no-repeat`,
      backgroundSize: 'cover',
      
    },
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
  
  
      <BoxImageHeader component='header'  sx={{ height: '50rem'}}>
      <Grid container sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '50rem'
      
      }}
      >

        
            <Box component='form' sx={{width: '100%', display: 'flex', justifyContent: 'center'}}> 
              <InputSearch name='search' variant='filled' sx={{width: '50%', bgcolor: '#eaeaea'}}>
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

    </Grid>
      </BoxImageHeader>

  );
}

// == Export
export default Header;

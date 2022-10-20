// == Import
import { Grid, Chip } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'


// == Composant
import livre from '../../../../asset/Images/Livre.jpg'

function NewBook ({image, tag, title}) {
  return (
    <Grid item md={3} sx={{position: 'relative'}}>
        <Box >

          {tag === 'Lecture en cours' && (
            <Chip
              sx={{position: 'absolute', top: '1rem', right: '-3rem', bgcolor: 'lightblue', padding: '1.5rem'}} 
              label={tag}
            />
          )}
          {tag === 'Lecture terminer' && (
            <Chip
              sx={{position: 'absolute', top: '1rem', right: '-3rem', bgcolor: 'lightgreen', padding: '1.5rem'}} 
              label={tag}
            />
          )}
          {tag === 'Wishlist' && (
            <Chip
              sx={{position: 'absolute', top: '1rem', right: '-3rem', bgcolor: 'lightpink', padding: '1.5rem'}} 
              label={tag}
            />
          )}
          {tag === 'Bibliothèque' && (
            <Chip
              sx={{position: 'absolute', top: '1rem', right: '-3rem', bgcolor: 'lightyellow', padding: '1.5rem'}} 
              label={tag}
            />
          )}
          <Box sx={{width: '100%'}}>
            <img  src={image} alt={title} width='100%'/>

          </Box>
          
        </Box>

    </Grid>
    
   
  );

}

// == Export
export default NewBook;

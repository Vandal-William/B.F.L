// == Import
import { Grid, Chip } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'


// == Composant
import livre from '../../../../asset/Images/Livre.jpg'

function NewBook () {
  return (
    <Grid item md={3} >
        <Box sx={{position: 'relative'}}>

          <Chip 
            sx={{position: 'absolute', top: '0.1rem', right: '0', bgcolor: 'lightgreen'}} 
            label="Terminer" 
          />
          <Box sx={{width: '100%'}}>
            <img src={livre} alt='livre' width='100%'/>

          </Box>
          
        </Box>

    </Grid>
    
   
  );

}

// == Export
export default NewBook;

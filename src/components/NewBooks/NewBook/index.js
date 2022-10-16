// == Import
import { Grid,Typography, Card, CardContent, Chip } from '@mui/material';
import { Box } from '@mui/system';

// == Composant
import livre from '../../../asset/Images/Livre.jpg'

function NewBook () {
  return (
    <Grid item sx={{width: '20rem'}}>
          <Box sx={{position: 'relative'}}>
      
            <Chip 
              sx={{position: 'absolute', top: '-1rem', right: '0', bgcolor: 'lightgreen'}} 
              label="Terminer" 
            />
            <img src={livre} alt='livre' width='100%'/>
            
          </Box>
    </Grid> 
  );

}

// == Export
export default NewBook;

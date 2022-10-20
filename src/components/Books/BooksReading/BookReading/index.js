// == Import
import { Box } from '@mui/material';

// == Composant

function BookReading ({image, title}) {
  return (
    
    <Box 
    component='img' 
    src={image}
    alt={title}
    sx={{width: '20%', height: '24rem', boxShadow: '0.1rem 0.1rem 0.2rem black', ":hover": 'background : linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1) )' }}

  />




  );

}

// == Export
export default BookReading;

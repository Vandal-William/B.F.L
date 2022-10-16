// == Import
import { Grid, Box} from '@mui/material';

// == Composant
import NewBook from './NewBook';

function Home () {
  return (

    <Grid container sx={{justifyContent: 'center'}} spacing={2}>
    
          <NewBook />
          <NewBook />
          <NewBook />
          

              
    
    </Grid>
  );

}

// == Export
export default Home;

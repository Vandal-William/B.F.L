// == Import
import { Grid, Box} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import './style.scss'

// == Composant
import NewBook from './NewBook';

function Home () {
  return (

    <Grid container>
      <Carousel 
        autoPlay 
        infiniteLoop 
        centerMode 
        centerSlidePercentage={100}
        showThumbs={false} 
        showStatus={false}
      >
            <NewBook />
            <NewBook />
            <NewBook />
            <NewBook />
            <NewBook />
      </Carousel>
    </Grid>

        
  );

}

// == Export
export default Home;

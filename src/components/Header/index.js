// == Import
import { AppBar, Box, Grid, Typography } from '@mui/material';
// == Composant
import headerImage from '../../asset/Images/header-image2-1280.jpg'
function Header() {
  return (
  
      <Box component='header'  sx={{ height: '50rem', background: `url(${headerImage}) no-repeat`,}}>
      <Grid container sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '50rem'
      
      }}
      >

        <AppBar>
          <Grid container sx={{
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '1rem'
          }}
          >
            <Typography variant='h5' sx={{textShadow: '0.1rem 0.1rem 0.2rem black', color: 'white'}}> Bibliothèque </Typography>

            <Box component='nav' sx={{display: 'flex', gap: '1rem'}}>
              <Typography sx={{textShadow: '0.1rem 0.1rem 0.2rem black', color: 'white'}}> Livres </Typography>
              <Typography sx={{textShadow: '0.1rem 0.1rem 0.2rem black', color: 'white'}}> Lecture en cours </Typography>
              <Typography sx={{textShadow: '0.1rem 0.1rem 0.2rem black', color: 'white'}}> Lecture términer </Typography>
              <Typography sx={{textShadow: '0.1rem 0.1rem 0.2rem black', color: 'white'}}> Wishlist </Typography>
            </Box>

          </Grid>

        </AppBar>
            <Typography 
              variant='h2' 
              sx={{
                fontWeight: 'bold', 
                color: 'rgb(255, 255, 255)',
                textShadow: '0.1rem 0.1rem 0.2rem black'
              }}
              
            > 
              Fantaisies Livresques
            </Typography>

    </Grid>
      </Box>

  );
}

// == Export
export default Header;

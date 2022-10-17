// == Import
import { Grid, AppBar, Typography, Box} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';




// == Composant
import NavLinkMobile from '../NavLinkMobile'

function NavBar () {


  const BoxMenu = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'md')]: {
      display : 'none',
    },
  }));

  const NavBar = styled(AppBar)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'md')]: {
      backgroundColor: 'rgb(255, 255, 255)',
    },
  }));

  const TexVariant = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'md')]: {
      color: 'black',
      textShadow: 'none'
    },
  }));
  return (
    
    <NavBar>
          <Grid container sx={{
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '1rem'
          }}
          >
            <TexVariant component={Link} to='/' variant='h5' sx={{textShadow: '0.1rem 0.1rem 0.2rem black', color: 'white'}}> Bibliothèque </TexVariant>
           
            <NavLinkMobile />
            <BoxMenu component='nav' sx={{display: 'flex', gap: '1rem'}}>
                  <Typography component={Link} to='/books' sx={{textShadow: '0.1rem 0.1rem 0.2rem black', color: 'white'}}> Livres </Typography>
                  <Typography component={Link} to='/reading' sx={{textShadow: '0.1rem 0.1rem 0.2rem black', color: 'white'}}> Lecture en cours </Typography>
                  <Typography component={Link} to='/complete' sx={{textShadow: '0.1rem 0.1rem 0.2rem black', color: 'white'}}> Lecture términer </Typography>
                  <Typography component={Link} to='/wishlist' sx={{textShadow: '0.1rem 0.1rem 0.2rem black', color: 'white'}}> Wishlist </Typography>
                  <Typography component={Link} to='/login' sx={{textShadow: '0.1rem 0.1rem 0.2rem black', color: 'white'}}> Connection </Typography>
                  <Typography component={Link} to='/signup' sx={{textShadow: '0.1rem 0.1rem 0.2rem black', color: 'white'}}> Inscription </Typography>
            </BoxMenu>
        
           

          </Grid>

        </NavBar>




  );

}

// == Export
export default NavBar;

// == Import
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import NavBar from '../NavBar';
import theme from '../../selectors/Theme';
import { Link } from 'react-router-dom';
import loginImage from '../../asset/Images/login/loginImage.jpg'
import Input from '../Input';
import { styled } from '@mui/system';



// == Composant
function Login () {

  const BoxLogin = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      margin: '0',
      marginTop: '5rem',
      marginRight: '2rem'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '40%',
      marginLeft: '2rem'

    } 
  }));
  const BoxLoginContainer = styled(Box)(({ theme }) => ({ 
    [theme.breakpoints.between('sm', 'md')]: {
      justifyContent: 'start'

    } 
  }));
  return (
    <>
      <NavBar />
      <BoxLoginContainer sx={{width: '100%', height: '100vh', bgcolor: 'lightblue', display: 'flex', justifyContent: 'end', alignItems: 'center', backgroundImage: `url(${loginImage})`, backgroundSize: 'cover'}}>
      
          
        <BoxLogin 
          sx={{
            width: '30%',  
            position: 'relative', 
            display: 'flex', 
            justifyContent: 'center',
            borderRadius: '0.5rem',
            bgcolor: 'white',
            marginTop: '5rem',
            marginRight: '5rem'
          }}
          >
          <Box 
            sx={{
              boxShadow: '0.1rem, 0.1rem, 0.2rem black', 
              width: '90%', 
              position: 'absolute', 
              height: '10rem', 
              top: '-2rem', 
              bgcolor: theme.palette.primary.main, 
              borderRadius: '0.5rem',
              color:'white'
            }}
            > 
            <Typography 
              variant='h5' 
              sx={{
                height: '5rem', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center' 
              }}
            >
              Connection
            </Typography>
          </Box>

          <Box sx={{width: '100%', padding: '1rem', display: 'flex', flexDirection: 'column'}}>
            <Box component='form' sx={{width: '100%', padding: '1rem', display: 'flex', flexDirection: 'column', marginTop: '9rem', gap: '1rem'}}>
              <Input name='email' label='Email' />
              <Input name='password' label='Mot de passe'/>
              <Button sx={{marginTop: '1rem'}}> Se connecter </Button>
              <Typography sx={{textAlign: 'center', marginTop: '2rem', color:'gray'}}> Pas de compte ? <Typography component={Link} sx={{color: theme.palette.primary.main}}> S'enregistrer </Typography> </Typography>
            </Box>
          </Box>

        </BoxLogin>
            
      </BoxLoginContainer>

    </>




  );

}

// == Export
export default Login;

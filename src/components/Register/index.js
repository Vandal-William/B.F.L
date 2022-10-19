/// == Import
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import NavBar from '../NavBar';
import theme from '../../selectors/Theme';
import { Link } from 'react-router-dom';
import RegisterImage from '../../asset/Images/register/registerImage.jpg'
import Input from '../Input';
import { styled } from '@mui/system';



// == Composant
function Register () {

  const BoxRegister = styled(Box)(({ theme }) => ({
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
  const BoxRegisterContainer = styled(Box)(({ theme }) => ({ 
    [theme.breakpoints.between('sm', 'md')]: {
      justifyContent: 'center'

    } 
  }));
  return (
    <>
      <NavBar />
      <BoxRegisterContainer sx={{width: '100%', height: '100vh', bgcolor: 'lightblue', display: 'flex', justifyContent: 'end', alignItems: 'center', background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) ), url(${RegisterImage})`, backgroundSize: 'cover'}}>
      
          
        <BoxRegister 
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
              Inscription
            </Typography>
          </Box>

          <Box sx={{width: '100%', padding: '1rem', display: 'flex', flexDirection: 'column'}}>
            <Box component='form' sx={{width: '100%', padding: '1rem', display: 'flex', flexDirection: 'column', marginTop: '9rem', gap: '1rem'}}>
              <Input name='pseudo' label='Pseudo' />
              <Input name='email' label='Email' />
              <Input name='password' label='Mot de passe'/>
              <Input name='confirm-password' label='Retapez le mot de passe'/>
              <Button sx={{marginTop: '1rem'}}> S'inscrire </Button>
              <Typography sx={{textAlign: 'center', marginTop: '2rem', color:'gray'}}> Déja un compte ? <Typography component={Link} sx={{color: theme.palette.primary.main}}> Se connecter </Typography> </Typography>
            </Box>
          </Box>

        </BoxRegister>
            
      </BoxRegisterContainer>

    </>




  );

}

// == Export
export default Register;

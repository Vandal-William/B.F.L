import { createTheme } from '@mui/material/styles';

const theme = createTheme({

  palette: {
    primary: {
      main: '#eaeaea'
    }
  },

    components: {
        // Name of the component
        MuiAppBar: {
          defaultProps: {
            // The props to change the default for.
          },
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              backgroundColor: 'rgb(255, 255, 255, 0)',
              boxShadow: 'none',
              position: 'absolute'
            },
          },
        },
         MuiContainer: {
            defaultProps: {
              component: 'main'
            },
            styleOverrides: {
              root: { 
                position: 'absolute',
                top: '750px',
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '1rem',
                paddingBottom: '1rem',
                paddingLeft: '0px',
                paddingRight: '0px'
               
              },
            },
          },
          MuiButton: {
            defaultProps: {
              variant: 'contained'
            },
            styleOverrides: {
              root: { 
    
               
              },
            },
          },
      },
    
});

export default theme

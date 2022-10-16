import theme from '../Theme'

const styles = (theme) => ({
    root: {
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.components.MuiContainer.styleOverrides.root.paddingLeft,
        paddingRight: theme.components.MuiContainer.styleOverrides.root.paddingRight,
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.components.MuiContainer.styleOverrides.root.paddingLeft,
        paddingRight: theme.components.MuiContainer.styleOverrides.root.paddingRight,
      },
    },
  });
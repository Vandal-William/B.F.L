import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavLinkMobile() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
          <ListItem disablePadding component={Link} to='/books'>
            <ListItemButton>

              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>

              <ListItemText > Livre </ListItemText>

            </ListItemButton>
          </ListItem>

          <ListItem disablePadding component={Link} to='/reading'>
            <ListItemButton>

              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>

              <ListItemText> Lecture en cours </ListItemText>

            </ListItemButton>
          </ListItem>

          <ListItem disablePadding component={Link} to='/complete'>
            <ListItemButton>

              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>

              <ListItemText> Lecture términer </ListItemText>

            </ListItemButton>
          </ListItem>

          <ListItem disablePadding component={Link} to='/wishlist'>
            <ListItemButton>

              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>

              <ListItemText> Wishlist </ListItemText>

            </ListItemButton>
          </ListItem>


     
      </List>

      <Divider />

      <List>

        <ListItem disablePadding component={Link} to='/login'>
          <ListItemButton>

            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>

            <ListItemText> Connection </ListItemText>

          </ListItemButton>
        </ListItem>

        <ListItem disablePadding component={Link} to='/signup'> 
          <ListItemButton>

            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>

            <ListItemText> Inscription </ListItemText>

          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>

            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>

            <ListItemText> Déconnection </ListItemText>

          </ListItemButton>
        </ListItem>
        
      </List>
    </Box>
  );

  const IconMenu = styled(MenuIcon)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display : 'none',
    },
  }));

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconMenu 
            sx={{color: '#605c6a'}}
            onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
        ))}
    </div>
  );
}


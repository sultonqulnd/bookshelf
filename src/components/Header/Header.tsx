import './Header.scss';
import {
  Link as MuiLink,
  Button,
  Container,
  Toolbar,
  Box,
  AppBar,
} from '@mui/material';

import { logo } from '../../assets';
import { Link as ReactRouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='lg'>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <MuiLink component={ReactRouterLink} to='/'>
            <img src={logo} style={{ width: '10%' }} alt='Logo' />
          </MuiLink>
          <Box
            sx={{
              ml: 'auto',
              flexGrow: 1,
              display: 'flex',
            }}
          >
            <MuiLink component={ReactRouterLink} to='/'>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Home
              </Button>
            </MuiLink>
            <MuiLink component={ReactRouterLink} to='/books'>
              <Button sx={{ my: 2, ml: 3, color: 'white', display: 'block' }}>
                Books
              </Button>
            </MuiLink>
            <MuiLink component={ReactRouterLink} to='/about'>
              <Button sx={{ my: 2, ml: 3, color: 'white', display: 'block' }}>
                About
              </Button>
            </MuiLink>
            <MuiLink component={ReactRouterLink} to='/signup'>
              <Button
                sx={{
                  my: 2,
                  ml: 3,
                  color: 'white',
                  display: 'block',
                  whiteSpace: 'nowrap',
                }}
              >
                Sign up
              </Button>
            </MuiLink>
            <MuiLink component={ReactRouterLink} to='/profile'>
              <Button sx={{ my: 2, ml: 3, color: 'white', display: 'block' }}>
                Profile
              </Button>
            </MuiLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

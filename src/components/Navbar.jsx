import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logOutUser } from '../redux/reducers/authSlice';

const pages = [{
    name: 'My Matches',
    link: '/my-matches',
}, {
    name: 'Interests',
    link: '/interests',
}];

const settings = [{
    name: 'Profile',
    link: '/profile',
},
{
    name: 'Account',
    link: '/account',
}
];

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const { user } = useSelector((state) => state.profileReducer);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (link) => {
        setAnchorElNav(null);
        navigate(link);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (link) => {
        setAnchorElUser(null);
        navigate(link);
    }

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                onClick={() => navigate('/')}
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Tingles 
              </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(e) => handleOpenNavMenu(e)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.link)}>
                    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => navigate('/')}
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Tingles
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', marginRight: '40px' }}>
              {pages.map((page) => (
                  <Button
                      key={page.name}
                      onClick={() => handleCloseNavMenu(page.link)}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                      {page.name}
                  </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={user?.firstName}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user?.photoUrl} />
                </IconButton>
              </Tooltip>
              <Menu 
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                PaperProps={{
                    sx: {
                        width: "120px", 
                    },
                }}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={() => handleCloseUserMenu(setting.link)}>
                    <Typography sx={{ textAlign: 'center' }}>{setting.name}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={() => {
                    handleCloseUserMenu()
                    dispatch(logOutUser())
                    navigate("/signup");
                }}>
                    <Typography sx={{ textAlign: 'center' }}>Log Out</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Header;
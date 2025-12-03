import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
//react hooks
import { useState } from 'react';
import { NavLink } from 'react-router-dom';




const pages = [
  {label:' 00 Home' , path:'/'},
 {label:'01 Destination' , path:'/destination'},
 {label:'02 Crew' , path:'/crew'},
 {label:'03 Technology', path:'/technology'},
];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

// 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 80%, transparent)'
return (
  <AppBar position="fixed"
  sx={{background: "transparent", opacity: 0.9,zIndex:1000,height:"82px" }}>
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
       
      }}
    >

      {/* ===== DESKTOP LOGO (always far left) ===== */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
        }}
      >
        <AutoAwesomeIcon sx={{ color: "white", fontSize: 40 }} />
      </Box>

      {/* ===== MOBILE LEFT SIDE (menu button) ===== */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
        }}
      >
        <IconButton size="large" color="inherit" onClick={handleOpenNavMenu}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* ===== MOBILE LOGO (on the right) ===== */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          ml: "auto",
        }}
      >
        <AutoAwesomeIcon sx={{ color: "white", fontSize: 40 }} />
      </Box>

      {/* ===== NAVBAR RIGHT SIDE ===== */}
      <Toolbar
        disableGutters
        sx={{
          width: { md: "55%", xs: "auto" },
          justifyContent: "flex-end",
        }}
      >

        {/* MOBILE MENU LIST */}
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "block", md: "none" } }}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
           PaperProps={{
              elevation: 0,
              sx: {
                background: 'rgba(5,10,20,0.75)',
                color: 'white',
                backdropFilter: 'blur(6px)',
                borderRadius: 2,
                mt: 1,
                minWidth: 200,
                px: 1,
              },
            }}
        >
          {pages.map((page) => (
            <MenuItem key={page.path} onClick={handleCloseNavMenu}   sx={{ p: 0, my: 0.5, background: 'transparent' }}>
              <NavLink to={page.path}  className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
              style={{ textDecoration: 'none', width: '100%', display: 'block'}}>
               {({ isActive }) => (
                    <Typography
                      sx={{
                        width: '100%',
                        textAlign: 'center',
                        py: 1,
                        px: 2,
                        my:1,
                        borderRadius: 1.5,
                        color: isActive ? '#0b0d17' : 'white',
                        backgroundColor: isActive ? '#ffffff' : 'transparent',
                        fontWeight: isActive ? 700 : 500,
                        transition: 'all 150ms ease',
                        textTransform: 'none',
                        border:"none",
                      }}
                    >
                      {page.label}
                    </Typography>
                  )}
              </NavLink>
            </MenuItem>
          ))}
        </Menu>

        {/* DESKTOP NAV */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-evenly",
            width: "100%",
            gap: 2,
            paddingY:3,
            fontFamily:"Bellefair",
            color:"white",
            textTransform:"uppercase",
          }}
        >
          {pages.map((page) => (
            <NavLink key={page.path} to={page.path}  className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
             style={{ textDecoration: 'none' }}>
              <Button sx={{ 
                color: "papayawhip", 
                display: "block",
                position: "relative",
                transition: "all 0.3s ease",
                pb: 0.5,
                '&:hover': {
                  color: 'white',
                }
              }}>
                {page.label}
              </Button>
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);
}


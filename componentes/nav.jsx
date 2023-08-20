import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


const paginas = ['inicio'];



const handleCloseNavMenu  = () => {
  console.log("clikeado");
};
 function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="button" sx={{ fontSize: 20, fontWeight: 'bold', flexGrow: 1 }}  component="div" >
            Los Santos Cars Admin BETA
          </Typography>
          <Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {paginas.map((paginas) => (
             <Link to={paginas}> <Button
             
             key={paginas}
            
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
             {paginas}
           </Button></Link>
            ))}
          </Box>
          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
             
            >
           
            </Menu>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
import React from 'react'
import { AppBar, Typography, Button, Toolbar,} from '@mui/material';
import Logo from '../images/Logo.png'


const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>                    
                <img src={Logo} alt="Logo" style={{ width: '200px', marginRight: '10px', marginTop: '10px'}} />
                </Typography>
                <Button varaint='text' color="inherit" size="large">Home</Button>
                <Button varaint="text" color="inherit"size="large" >My Quizes</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar
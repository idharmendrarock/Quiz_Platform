import React from 'react'
import { AppBar, Typography, Toolbar,Link, Stack} from '@mui/material';
// import {Link} from 'react-router-dom'
import Logo from '../images/Logo.png'


const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>                    
                <img src={Logo} alt="Logo" style={{ width: '200px', marginRight: '10px', marginTop: '10px'}} />
                </Typography>
                <Stack direction='row' spacing={4}>
                    <Link color='inherit' underline='none' component='button'>Home</Link>
                    <Link color='inherit' underline='none' component='button'>My Quizes</Link>

                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar
import React from 'react'
import { Typography, Grid, } from '@mui/material';



const HeroSection = () => {
    return (
        <Grid container spacing={5} style={{ width: '100%', marginTop: '20%',}}>
            <Grid item xs={6}>
                <Typography variant="h3"  textAlign='center'>Create New Quizes</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="h3" textAlign='center'>My Quizes</Typography>
            </Grid>
        </Grid>
    )
}




export default HeroSection

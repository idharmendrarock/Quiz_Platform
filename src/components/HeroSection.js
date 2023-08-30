import React from 'react'
import CreateQuizes from '../images/CreateQuizes.jpg'
import myQuizes from '../images/myQuizes.png'
import { Typography, Grid,CardActionArea,CardContent } from '@mui/material';



const HeroSection = () => {
    return (
        <Grid container sx={6} style={{ width: '100%', marginTop: '10%',marginLeft:'10%'}}>
           
           <Grid  >
                   
                <CardActionArea >                        
                    <CardContent>  
                        <img src={CreateQuizes} alt='CreateQuizes' width='300px' height='200px'/>                      
                        <Typography variant="h6" component='h1' textAlign='center' >Create New Quizes</Typography>                    
                    </CardContent>                         
                </CardActionArea>
            </Grid> 

            <br />
           
            <Grid  >
              
              <CardActionArea >                        
                  <CardContent> 
                      <img src={myQuizes} alt='myQuizes' width='300px' height='200px'/> 
                      <Typography variant="h6" component='h1' textAlign='center'>My Quizes</Typography>                      
                  </CardContent>  
              </CardActionArea>
                                                        
            </Grid>
            
            
            
        </Grid>
    )
}




export default HeroSection

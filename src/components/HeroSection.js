import React from 'react'
import CreateQuizes from '../images/CreateQuizes.jpg'
import myQuizes from '../images/myQuizes.jpg'
import { Typography, Grid,CardActionArea,CardContent } from '@mui/material';



const HeroSection = () => {
    return (
        <Grid container sx={6} style={{ width: '100%', marginTop: '10%',marginLeft:'20%'}}>
           
           <Grid item sx={4} >
                   
                <CardActionArea >                        
                    <CardContent>  
                        <img src={CreateQuizes} alt='CreateQuizes' width='300px' height='200px'/>                      
                        <Typography variant="h6" component='h1' textAlign='center' >Create New Quizes</Typography>                    
                    </CardContent>                         
                </CardActionArea>
            </Grid> 
           
            <Grid item xs={4} width='150px' >
              
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

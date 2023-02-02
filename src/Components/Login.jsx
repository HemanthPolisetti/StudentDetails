import React from 'react';
import {Box , Typography} from '@mui/material';
import Loginpage from './Loginpage';

const Login = ({currentUser ,setCurrentUser}) => {
  return ( 
    <Box sx={{vh:'90%'}}>
        <Typography p={2} mb={2} sx={{backgroundColor:'red' , color:'white' , fontSize:'20px'
    , fontWeight:'bold'}}> 
            Student Details
        </Typography>
        <Loginpage currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </Box>
  )
}

export default Login;
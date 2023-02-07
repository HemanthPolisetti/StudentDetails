import { Typography ,Stack, Button, TextField,Box } from "@mui/material";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
const Loginpage = () => {
    const [error,setError]=useState(false)
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate();

    const handleLogin = (e) => {
      e.preventDefault()
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    navigate("/home")
  })
  .catch((error) => {
    setError(true)
  });

    }
  return (
    <Box sx={{vh:'90%'}}>
        <Typography p={2} mb={2} sx={{backgroundColor:'red' , color:'white' , fontSize:'20px', fontWeight:'bold'}}> 
            Student Details
        </Typography>
    <Stack direction='row' justifyContent='center'>
    <form style={{display:'flex',flexDirection:'column',gap:'1rem',alignItems:'center'}} onSubmit={handleLogin}>
        <Typography variant="h4" p={1}>Login Form</Typography>
       <TextField id="outlined-basic" color='error' label="Email" variant="outlined" type='email' onChange={e=>setEmail(e.target.value)}/>
       <TextField id="outlined-basic" color='error' label="Password" variant="outlined" type='password' onChange={e=>setPassword(e.target.value)}/>
       <Button variant="contained" color='error' type='submit'>Login</Button>
       {error&&<Typography variant='body1' color='error'>Wrong Email/Password</Typography>}
    </form>
    </Stack>
    </Box>
  )
}

export default Loginpage;
import { Typography ,Stack, Button, TextField } from "@mui/material";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
const Loginpage = () => {
    
    const [loginError,setLoginError]=useState(false)
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()
    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
      e.preventDefault();
  
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch({type:"LOGIN", payload:user})
          navigate("/")
        })
        .catch((error) => {
          setLoginError(true);
        });
    };
    
  return (
    <Stack direction='row' justifyContent='center'>
    <form style={{display:'flex',flexDirection:'column',gap:'1rem',alignItems:'center'}} onSubmit={handleLogin}>
        <Typography variant="h4" p={1}>Login Form</Typography>
       <TextField id="outlined-basic" color='error' label="Email" variant="outlined" type='email' onChange={e=>setEmail(e.target.value)}/>
       <TextField id="outlined-basic" color='error' label="Password" variant="outlined" type='password' onChange={e=>setPassword(e.target.value)}/>
       <Button variant="contained" color='error' type='submit'>Login</Button>
       {loginError&&<Typography variant='body1' color='error'>Wrong Email/Password</Typography>}
    </form>
    </Stack>
  )
}

export default Loginpage;
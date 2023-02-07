import React, { useState } from 'react';
import {Box , Stack , TextField, Typography,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {addDoc} from 'firebase/firestore';
import {db} from '../Firebase';
import {collection} from '@firebase/firestore';
import { signOut} from "firebase/auth";
import { auth } from "../Firebase";

const Home = () => {
  const navigate=useNavigate()
  const userCollectionRef = collection(db, "companyDetails")
  const [companyName, setCompanyName] = useState("")
  const [salaryPackage, setSalaryPackage] = useState("")
  const [eligibleBranches, setEligibleBranches] = useState("")
  const [summary, setSummary] = useState("")
  const [updated,setUpdated] = useState(false)
  const formSubmit=(e)=>{
      e.preventDefault();
      const updateValues=async()=>{
        await addDoc(userCollectionRef,{companyName:companyName, Package:salaryPackage ,
           eligibleBranches:eligibleBranches , Summary:summary})
      }
      updateValues();
      setUpdated(true)
      
  }
 const Logoutfunc=(e)=>{
  e.preventDefault();
  signOut(auth).then(() => {
    navigate('/')
  }).catch((error) => {
    console.log(error)
  });
  
 }
  
  return (
    <Box>
      <Stack justifyContent='center'>
        <form style={{display:'flex',flexDirection:'column',gap:'1rem',alignItems:'center'}} autoComplete="off" onSubmit={formSubmit}>
        <Typography variant="h4"> Placement Details </Typography>
        <TextField id="outlined-basic" label="Name Of the company" variant="outlined" name='company' onChange={(e)=>{setCompanyName(e.target.value)}}/>
        <TextField id="outlined-textarea" label="About Company" multiline sx={{width:'15rem'}} name='summary' onChange={(e)=>{setSummary(e.target.value)}}/>
        <TextField id="outlined-basic" label="Package" variant="outlined" name='package'onChange={(e)=>{setSalaryPackage(e.target.value)}}/>
        <TextField id="outlined-basic" label="Eligible Branches" variant="outlined" name='eb' onChange={(e)=>{setEligibleBranches(e.target.value)}}/>
        <Button variant="outlined" type='submit'>Submit</Button>
        {updated && <Typography variant="h4" gutterBottom color='green'> Successfully Data is Added </Typography>}
      </form>
      </Stack>
      <Button variant="outlined" type='submit' onClick={Logoutfunc}>Logout</Button>
    </Box>

  )
}

export default Home
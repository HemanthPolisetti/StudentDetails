import React, { useState } from 'react';
import {Box , Stack , TextField, Typography,Button} from '@mui/material';
import {addDoc} from 'firebase/firestore';
import {db} from '../Firebase';
import {collection} from '@firebase/firestore';

const Home = () => {
  const userCollectionRef = collection(db, "comapanyDetails")
  const [companyName, setCompanyName] = useState("")
  const [salaryPackage, setSalaryPackage] = useState("")
  const [eligibleBranches, setEligibleBranches] = useState("")
  const [summary, setSummary] = useState("")
  const formSubmit=(e)=>{
      e.preventDefault();
      const updateValues=async()=>{
        await addDoc(userCollectionRef,{companyName:companyName, Package:salaryPackage ,
           eligibleBranches:eligibleBranches , Summary:summary})
      }
      updateValues();
      alert("Success")
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
      </form>
      </Stack>
    </Box>

  )
}

export default Home
import React, { useEffect , useState} from 'react'
import CardContent from '@mui/material/CardContent';
import {collection ,getDocs} from '@firebase/firestore';
import {Box , Card , Typography, Stack} from '@mui/material';
import {db} from '../Firebase';

const Details = () => {
    const userCollectionRef = collection(db, "companyDetails")
    const [users , setUsers] = useState([]);
    useEffect(() => {
        const pDetails=async()=>{
            const data=await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        }
            pDetails();
    })
  return (
    <Box>
        <Stack direction='row' gap='1rem'>
            {users.map((user)=>{
                return(
                    
                    <Card variant="outlined" sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {user.companyName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" width='auto'>
                            {user.Summary}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.Package}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.eligibleBranches}
                        </Typography>
                    </CardContent>
                    </Card>
                )
            })}
        </Stack>
    </Box>
  )
}

export default Details;
import React, { useEffect, useState } from 'react'

import {FormGroup,FormControl,InputLabel,Input,Button,Typography,makeStyles} from '@material-ui/core'
import { edituser,getuser } from '../Service/Api';
import { useNavigate,useParams } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
      width: '50%',
      margin: '5% 0 0 25%',
      '& > *': {
          marginTop: 20
      }
  }
})
const initialvalue={
  name:'',
  email:'',
  phone:'',
  city:''
}
export default function Edituser() {
  const[user, setUser]=useState(initialvalue)
  const { name, email, phone, city } = user;
  const {id}=useParams()
  const classes = useStyles();
  const navigate = useNavigate()

  useEffect(()=>{
      loadUserData()
  },[])

  const loadUserData=async ()=>{
    const response = await getuser(id);
    setUser(response.data);
  }

  const onValueChange=(e)=>{
    console.log(e.target.value);
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user);
  }
  const edituserdetalis= async ()=>{
   await edituser(id,user)
   navigate('/all-user');
   
  }
  return (
    <FormGroup className={classes.container}>
    <Typography variant="h4">Edit User</Typography>
    <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input  name='name' onChange={(e) => onValueChange(e)} value={name}  />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input  name='email' onChange={(e) => onValueChange(e)} value={email} />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input  name='phone' onChange={(e) => onValueChange(e)} value={phone} />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">City</InputLabel>
        <Input  name='city' onChange={(e) => onValueChange(e)} value={city} />
    </FormControl>
    <FormControl>
        <Button variant="contained" onClick={() => edituserdetalis()} color="primary" >Update User</Button>
    </FormControl>
</FormGroup>
  )
}

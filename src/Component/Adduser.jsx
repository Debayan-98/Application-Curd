import React, { useState } from 'react'
import { FormGroup, FormControl, InputLabel, Input, Button, Typography,makeStyles } from '@material-ui/core';
import { adduser } from '../Service/Api';
import { useNavigate } from 'react-router-dom';

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
export default function Adduser() {
  const[user, setUser]=useState(initialvalue)

  const { name, email, phone, city } = user;
//for custom css function
  const classes = useStyles();

  const navigate = useNavigate()
  
  const onValueChange=(e)=>{
    console.log(e.target.value);
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user);
  }
  const adduserdetalis= async ()=>{
   await adduser(user)
   navigate('/all-user');
   
  }
  return (
    <FormGroup className={classes.container}>
    <Typography variant="h4">Add User</Typography>
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
        <Button variant="contained" onClick={() => adduserdetalis()} color="secondary" >Add User</Button>
    </FormControl>
</FormGroup>
  )
}

import React, { useEffect, useState } from 'react'
import { getuser, deleteUser } from '../Service/Api'
import { Link } from 'react-router-dom';


import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
const useStyles = makeStyles({
  table: {
    width: '90%',
    margin: '50px 0 0 50px',
  },
  thead: {
    '& > *': {
      fontSize: 20,
      background: '#000000',
      color: '#FFFFFF',
    }
  },
  row: {
    '& > *': {
      fontSize: 18
    }
  }
})
export default function Alluser() {
  const classes = useStyles()

  const [user, setUser] = useState([])

  useEffect(() => {
    getalluser()
  }, [])



  const getalluser = async () => {
    const response = await getuser()
    console.log(response.data);
    setUser(response.data)
  }

const deleteUserData = async(id) => {
  await deleteUser(id)
  getalluser()
}

  return (

    <div>
      <Typography variant="h3" style={{ marginBottom: 50 }}> All Data Record</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell >Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((users) => (
              <TableRow className={classes.row} key={users.id}>
                <TableCell>{users.id}</TableCell>
                <TableCell>{users.name}</TableCell>
                <TableCell>{users.email}</TableCell>
                <TableCell>{users.phone}</TableCell>
                <TableCell>{users.city}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" component={Link} to={`/edit-user/${users.id}`} style={{ marginRight: 10 }} >Edit</Button>
                  <Button variant="contained" color="secondary" onClick={()=>deleteUserData(users.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

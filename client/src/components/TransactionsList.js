import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import IconButton from "@mui/material/IconButton";





export default function TransactionsList({transcation,fetchTransctions,setEdittranscation}) {

    async function remove(_id) {
        
        if (!window.confirm("Are you sure")) return;
        const res = await fetch(
          `http://localhost:4000/transcation/${_id}`,
          {
            method: "DELETE",
           
          }
        );
        if (res.ok) {
          fetchTransctions();
          window.alert("Deleted Successfully");
        }
      }

  return (
    <Container>
    <TableContainer component={Paper} sx={{marginTop:10}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Amount</TableCell>
            
            <TableCell align='center'>Description</TableCell>
            
            <TableCell align='center'>Date</TableCell>
            <TableCell align="center">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {transcation.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">
                    <IconButton
                      color="primary"
                      component="label"
                      onClick={() => setEdittranscation(row)}
                      
                    >
                      <EditSharpIcon />
                    </IconButton>

                    <IconButton
                      color="warning"
                      component="label"
                      onClick={() => remove(row._id)}
                    >
                      <DeleteSharpIcon />
                    </IconButton>
                  </TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
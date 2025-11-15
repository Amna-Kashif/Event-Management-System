import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ClientTable = ({ clients }) => {
  return (
    <>
    <Typography variant='h4' sx={{color: '#053563', my: 2, fontWeight: 600}}> Clients Directory</Typography>
    <TableContainer component={Paper} sx={{mt: 2}}>
        <Table sx={{minWidth: 650, justifyContent: 'center'}} aria-label='client table'>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Total Events</TableCell>
                    <TableCell>Total Spent</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {clients.map((client, index) => (
                    <TableRow key={index} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                        <TableCell component='th' scope='row'>{client.name}</TableCell>
                        <TableCell>{client.company || '-'}</TableCell>
                        <TableCell> {client.email} <br /> {client.phone}</TableCell>
                        <TableCell> {client.totalEvents} </TableCell>
                        <TableCell> {client.totalSpent} </TableCell>
                        <TableCell> <Button size='small' sx={{color: '#064885ff', textTransform: 'capitalize', border: '1px solid #064885ff'}}>View Details</Button> </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>
  );
};

export default ClientTable;

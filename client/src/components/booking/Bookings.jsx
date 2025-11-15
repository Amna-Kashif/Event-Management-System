import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';

const Bookings = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const bookingData = [
    { eventName: 'Johnson Wedding', client: 'Sarah Johnson', date: 'Nov 08, 2025', venue: 'Grand Ballroom', guests: 150, amount: '$12,500', status: 'confirmed' },
    { eventName: 'Tech Corp Annual Gala', client: 'Michael Chen', date: 'Nov 09, 2025', venue: 'Executive Hall', guests: 80, amount: '$8,500', status: 'confirmed' },
    { eventName: 'Smith 50th Anniversary', client: 'Robert Smith', date: 'Nov 10, 2025', venue: 'Garden Pavilion', guests: 50, amount: '$4,200', status: 'pending' },
    { eventName: 'Corporate Training Dinner', client: 'Amanda Rodriguez', date: 'Nov 15, 2025', venue: 'Executive Hall', guests: 60, amount: '$5,500', status: 'confirmed' },
    { eventName: 'Birthday Celebration', client: 'Jessica Lee', date: 'Oct 28, 2025', venue: 'Rooftop Terrace', guests: 40, amount: '$3,800', status: 'completed' },
    { eventName: 'Holiday Party 2025', client: 'David Brown', date: 'Dec 20, 2025', venue: 'Grand Ballroom', guests: 200, amount: '$18,000', status: 'pending' },
  ];
  

  const filterBooking = bookingData.filter((booking) => {
    const matcheSearch = booking.eventName.toLowerCase().includes(searchTerm.toLowerCase())
    const matcheStatus = statusFilter ? booking.status === statusFilter : true;
    return matcheSearch && matcheStatus
  })

  
  const getStatusChip = (status) => {
    const colorMap = { confirmed: 'success', pending: 'warning', completed: 'primary' }
    return (
      <Chip label={status} color={colorMap[status] || 'default'} variant='outlined' size='small' sx={{textTransform: 'capitalize',
        fontWeight: 500, bgcolor: status === 'confirmed' ? '#E8F5E9' : status === 'pending' ? '#FFF8E1' : status === 'completed' ? '#E3F2FD' : 'transparent'
      }}
    />
  )
}

  return (
    <>
     <Box sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}, alignItems: {md: 'center', xs: 'flex-start',
           justifyContent: 'space-between', mb: 3 }}}>
           <Box>
             <Typography variant='h4' sx={{fontWeight: 600}}>All Bookings</Typography>
             <Typography variant='subtitle1' color='text.secondary'>Manage all your appointments and reservations here.</Typography>
           </Box>
           <Button variant="contained" sx={{backgroundColor: '#053563', borderRadius: '8px', textTransform: 'none',px: 3,
             mt: { xs: 2, md: 0 }, '&:hover': { backgroundColor: '#082440' },}}> + Add Booking </Button>
         </Box>

      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <TextField label="Search by Event Name" variant='outlined' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} sx={{flex: 1, minWidth: 250}} />
        <Select displayEmpty value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} sx={{width: 200}}>
         <MenuItem value=''>All Status</MenuItem>
         <MenuItem value='confirmed'>Confirmed</MenuItem>
         <MenuItem value='pending'>Pending</MenuItem>
         <MenuItem value='completed'>Completed</MenuItem>
        </Select>
      </Box>

         <TableContainer component={Paper} sx={{mt: 2}}>
          <Table sx={{minWidth: 650, justifyContent: 'center'}} aria-label='booking table'>
            <TableHead sx={{fontWeight: 'bold'}}>
              <TableRow>
                  <TableCell>Event Name</TableCell>
                  <TableCell>Client </TableCell>
                  <TableCell>Date </TableCell>
                  <TableCell>Venue </TableCell>
                  <TableCell>Guest </TableCell>
                  <TableCell>Amount </TableCell>
                  <TableCell>Status </TableCell>
                  <TableCell>Actions </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filterBooking.map((bookdata, index) => (
                <TableRow key={index} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                  <TableCell> {bookdata.eventName} </TableCell>
                  <TableCell> {bookdata.client} </TableCell>
                  <TableCell> {bookdata.date} </TableCell>
                  <TableCell> {bookdata.venue} </TableCell>
                  <TableCell> {bookdata.guests} </TableCell>
                  <TableCell> {bookdata.amount} </TableCell>
                  <TableCell> {getStatusChip(bookdata.status)} </TableCell>
                  <TableCell> 
                    <Button sx={{color: 'green', minWidth: 0, mr: 1}}><CreateOutlinedIcon /></Button> 
                    <Button sx={{color: 'red', minWidth: 0}}><DeleteOutlinedIcon /></Button> 
                    </TableCell>
                </TableRow>
              ))}

              {filterBooking.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} align="center"> No matching bookings found </TableCell>
              </TableRow>
            )}
            </TableBody>
          </Table>
         </TableContainer>
    </>
  )
}

export default Bookings
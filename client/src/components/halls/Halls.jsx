import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Grid
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';

const Halls = () => {
 const hallsData = [
  {
    name: 'Grand Ballroom',
    image: 'https://thearchitectsdiary.com/wp-content/uploads/2023/03/Andspaces-1-1024x682.jpg',
    capacity: '500 guests',
    price: '₨50,000 / day',
    features: ['AC', 'Stage', 'Sound System', 'Lighting', '+1 more'],
    available: true
  },
  {
    name: 'Royal Garden Hall',
    image: 'https://thearchitectsdiary.com/wp-content/uploads/2023/03/Andspaces-1-1024x682.jpg',
    capacity: '300 guests',
    price: '₨35,000 / day',
    features: ['AC', 'Garden', 'Catering', 'Parking'],
    available: true
  },
  {
    name: 'Crystal Convention Center',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800x`',
    capacity: '800 guests',
    price: '₨75,000 / day',
    features: ['AC', 'Projector', 'WiFi', 'Stage', '+2 more'],
    available: true
  },
  {
    name: 'Crystal Convention Center',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800x`',
    capacity: '800 guests',
    price: '₨75,000 / day',
    features: ['AC', 'Projector', 'WiFi', 'Stage', '+2 more'],
    available: true
  },
  {
    name: 'Crystal Convention Center',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800x`',
    capacity: '800 guests',
    price: '₨75,000 / day',
    features: ['AC', 'Projector', 'WiFi', 'Stage', '+2 more'],
    available: true
  },
  {
    name: 'Crystal Convention Center',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800x`',
    capacity: '800 guests',
    price: '₨75,000 / day',
    features: ['AC', 'Projector', 'WiFi', 'Stage', '+2 more'],
    available: true
  },
];


  return (
    <Box sx={{ p: 2 }}>
        {/* Heading */}
    <Box sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}, alignItems: {md: 'center', xs: 'flex-start',
           justifyContent: 'space-between', mb: 3 }}}>
           <Box>
             <Typography variant='h4' sx={{fontWeight: 600}}>Halls</Typography>
             <Typography variant='subtitle1' color='text.secondary'>Manage your event halls and venues</Typography>
           </Box>
           <Button variant="contained" sx={{backgroundColor: '#053563', borderRadius: '8px', textTransform: 'none',px: 3,
             mt: { xs: 2, md: 0 }, '&:hover': { backgroundColor: '#082440' },}}> <AddIcon /> Add New Hall </Button>
         </Box>

            {/* Content */}
      <Grid container spacing={2}>
        {hallsData.map((hall, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia component="img" height="180" width='180' image={hall.image} alt={hall.name} />
                {hall.available && (
                  <Chip icon={<CheckCircleIcon />} label="Available" color="success" 
                  size="small" sx={{ position: 'absolute', top: 10, left: 10, fontWeight: 600 }} />
                )}
              </Box>

              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#053563' }}>{hall.name}</Typography>
                <Typography variant="body2" color="text.secondary">{hall.capacity}</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 500, mt: 0.5 }}>{hall.price}</Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1.5, mb: 1.5 }}>
                  {hall.features.map((feature, i) => (
                    <Chip key={i} label={feature} size="small" variant="outlined" />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 2.2 }}>
                  <Button variant="outlined" startIcon={<EditIcon />} color="dark" size="small"> Edit </Button>
                  <Button variant="outlined" startIcon={<DeleteIcon />} color="dark" size="small">Delete</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Halls;

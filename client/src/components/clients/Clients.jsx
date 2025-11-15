import React from 'react';
import Box from '@mui/material/Box';
import ClientCards from './ClientCards';
import ClientTable from './ClientTable';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Clients = () => {
  const clientStats = [
    { title: 'Total Clients', value: 6 },
    { title: 'Active This Month', value: 6 },
    { title: 'Total Client Value', value: '$115,700' },
  ];

  const clientData = [
    { name: 'Sarah Johnson', company: '-', email: 'sarah.johnson@email.com', phone: '+1 (555) 123-4567', totalEvents: 2, totalSpent: '$15,200' },
    { name: 'Michael Chen', company: 'Tech Corp', email: 'm.chen@techcorp.com', phone: '+1 (555) 234-5678', totalEvents: 4, totalSpent: '$32,000' },
    { name: 'Robert Smith', company: '-', email: 'rob.smith@email.com', phone: '+1 (555) 345-6789', totalEvents: 1, totalSpent: '$4,200' },
    { name: 'Amanda Rodriguez', company: 'Rodriguez & Associates', email: 'a.rodriguez@company.com', phone: '+1 (555) 456-7890', totalEvents: 3, totalSpent: '$18,500' },
    { name: 'Jessica Lee', company: '-', email: 'jessica.lee@email.com', phone: '+1 (555) 567-8901', totalEvents: 1, totalSpent: '$3,800' },
    { name: 'David Brown', company: 'Brown Enterprises', email: 'd.brown@business.com', phone: '+1 (555) 678-9012', totalEvents: 5, totalSpent: '$42,000' },
  ];
  
  return (
    <Box sx={{p: 2}}>

      <Box sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}, alignItems: {md: 'center', xs: 'flex-start',
        justifyContent: 'space-between', mb: 3 }}}>
        <Box>
          <Typography variant='h4' sx={{fontWeight: 600}}>Clients</Typography>
          <Typography variant='subtitle1' color='text.secondary'>Manage your client relationships</Typography>
        </Box>
        <Button variant='contained' sx={{textTransform: 'capitalize', bgcolor: '#053563' }} 
        startIcon={<AddIcon />} onClick={() => alert('client added')}>Add new Client</Button>
      </Box>
      
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: {xs: 'center', md: 'flex-start', p: 2 }}}>
        {clientStats.map((item, index) => (
          <ClientCards key={index} title={item.title} value={item.value} />
        ))}
    </Box>

        <ClientTable clients={clientData} />

        </Box>
  );
};

export default Clients;

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ClientCards = ({ title, value }) => {
  return (
    <Card sx={{minWidth: 200, flex: 1, m: 1, boxShadow: 1, borderRadius: 3, border: '1px solid #f8f8f8'}}>
        <CardContent>
            <Typography variant='subtitle1' color='text.secondary'>{title}</Typography>
            <Typography variant='h5' component='div' sx={{mt: 1}}>{value}</Typography>
        </CardContent>
    </Card>
  );
};

export default ClientCards;

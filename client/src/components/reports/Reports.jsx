import { Card, Grid, CardContent } from '@mui/material';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MovingIcon from "@mui/icons-material/Moving";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

// 
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';


const Reports = () => {

  const revenueData = [
    { month: 'Jan', revenue: 25 },
    { month: 'Mar', revenue: 50 },
    { month: 'Apr', revenue: 75 },
    { month: 'Jun', revenue: 100 },
    { month: 'Jul', revenue: 60 },
    { month: 'Sep', revenue: 85 },
    { month: 'Oct', revenue: 90 },
    { month: 'Dec', revenue: 95 },
  ];

  const bookingData = [
    { month: 'Feb', bookings: 0.75 },
    { month: 'Apr', bookings: 1.5 },
    { month: 'Jun', bookings: 2.25 },
    { month: 'Jul', bookings: 3 },
    { month: 'Aug', bookings: 2.5 },
    { month: 'Oct', bookings: 1.8 },
    { month: 'Dec', bookings: 2.2 },
  ];

  const hallPerformance = [
    { hall: 'Grand', revenue: 36 },
    { hall: 'Royal', revenue: 27 },
    { hall: 'Crystal', revenue: 18 },
  ];

  const paymentStatus = [
    { name: 'Paid', value: 25, color: '#4caf50' },
    { name: 'Partial', value: 50, color: '#ff9800' },
    { name: 'Pending', value: 25, color: '#f44336' },
  ];

  
    const recordSummary = [
      {
        title: "Total Revenue",
        value: "₨85,000",
        icon: <AttachMoneyIcon sx={{ fontSize: 50, color: "#fff" }} />,
        gradient: "linear-gradient(135deg, #00C9A7 0%, #00A6A6 100%)",
      },
      {
        title: "Total Bookings",
        value: "4",
        icon: <PendingActionsIcon sx={{ fontSize: 50, color: "#fff" }} />,
        gradient: "linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)",
      },
      {
        title: "Average Revenue",
        value: "₨21,250",
        icon: <CheckCircleOutlineIcon sx={{ fontSize: 50, color: "#fff" }} />,
        gradient: "linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)",
      },
      {
        title: "Occupancy Rate",
        value: "4%",
        icon: <BarChartOutlinedIcon sx={{ fontSize: 50, color: "#fff" }} />,
        gradient: "linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)",
      },
    ];
  

  return (
    <>
     <Box sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}, alignItems: {md: 'center', xs: 'flex-start'},
           justifyContent: 'space-between', mb: 3 }}>
           <Box>
             <Typography variant='h4' sx={{fontWeight: 600}}>Reports & Analytics</Typography>
             <Typography variant='subtitle1' color='text.secondary'>View insights and statistics for your events.</Typography>
           </Box>
         </Box>



      
      {/* Summary Cards */}
      <Grid container spacing={2} sx={{ mb: 5 }}>
        {recordSummary.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card sx={{ background: item.gradient, color: "#fff", borderRadius: 3, boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                p: 2, height: "100%", width: "100%", minWidth: 290, position: "relative", overflow: "hidden"}}>
              {/* Faint icon */}
              <Box
                sx={{ position: "absolute",top: 10, right: 10, opacity: 0.15,
                  pointerEvents: "none",}}> <MovingIcon sx={{ fontSize: 80 }} />{" "}  </Box>

              {/* Foreground cards content */}
              <Box sx={{ position: "relative", zIndex: 2 }}>
                <Box sx={{ mb: 1, fontSize: 50 }}>{item.icon}</Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>{item.title}</Typography>
                  <Typography variant="h4" sx={{  my: 0.5 }}>{item.value}</Typography>
                <Typography variant="caption">{item.desc}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Monthly Revenue Trend */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, minWidth: 600 }}>
            <CardContent>
              <Typography variant='h6'>Monthly Revenue Trend</Typography>
              <Typography variant='body2' color='text.secondary'>
                Revenue collected over the year (in thousands)
              </Typography>
              <Box sx={{ height: 250 }}>
                <ResponsiveContainer width='100%' height='100%'>
                  <LineChart data={revenueData}>
                    <XAxis dataKey='month' />
                    <YAxis />
                    <Tooltip />
                    <Line type='monotone' dataKey='revenue' stroke='#1976d2' strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Monthly Booking Count */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, minWidth: 600 }}>
            <CardContent>
              <Typography variant='h6'>Monthly Booking Count</Typography>
              <Typography variant='body2' color='text.secondary'>
                Number of bookings per month
              </Typography>
              <Box sx={{ height: 250 }}>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart data={bookingData}>
                    <XAxis dataKey='month' />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey='bookings' fill='#9c27b0' />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Hall Performance */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, minWidth: 600 }}>
            <CardContent>
              <Typography variant='h6'>Hall Performance</Typography>
              <Typography variant='body2' color='text.secondary'>
                Revenue by hall (in thousands)
              </Typography>
              <Box sx={{ height: 250 }}>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart data={hallPerformance}>
                    <XAxis dataKey='hall' />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey='revenue' fill='#03a9f4' />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Payment Status Distribution */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, minWidth: 600 }}>
            <CardContent>
              <Typography variant='h6'>Payment Status Distribution</Typography>
              <Typography variant='body2' color='text.secondary'>
                Breakdown of payment statuses
              </Typography>
              <Box sx={{ height: 250 }}>
                <ResponsiveContainer width='100%' height='100%'>
                  <PieChart>
                    <Pie
                      data={paymentStatus}
                      cx='50%'
                      cy='50%'
                      outerRadius={80}
                      dataKey='value'
                      label
                    >
                      {paymentStatus.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </>
  )
}

export default Reports
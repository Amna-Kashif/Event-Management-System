import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import EventNoteIcon from '@mui/icons-material/EventNote';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Dashboard = () => {
    const totalStats = [
    { title: 'Total Bookings', value: 6, desc: 'All time booking', icon: <EventNoteIcon sx={{ color: '#053563' }} /> },
    { title: 'Upcoming Events', value: 2, desc: 'Next 30 days', icon: <CalendarMonthIcon sx={{ color: '#053563' }} /> },
    { title: 'Total Revenue', value: '$115,700', desc: 'Year to date', icon: <AttachMoneyIcon sx={{ color: '#053563' }} /> },
    { title: 'Pending', value: '2', desc: 'Awaiting confirmation', icon: <PendingActionsIcon sx={{ color: '#053563' }} /> },
  ];

  const recentActivity = [
    { label: 'New booking confirmed', detail: 'Johnson Wedding - 2 hours ago' },
    { label: 'Payment received', detail: 'Tech Corp Gala - 5 hours ago' },
    { label: 'Pending confirmation', detail: 'Smith Anniversary - 1 day ago' },
  ];

  const upcomingEvents = [
    { name: 'Johnson Wedding', date: 'Nov 8, 2025 - 6:00 PM', guests: '150 guests' },
    { name: 'Corporate Dinner', date: 'Nov 9, 2025 - 7:00 PM', guests: '80 guests' },
    { name: 'Birthday Celebration', date: 'Nov 10, 2025 - 5:00 PM', guests: '50 guests' },
  ];

  return (
   <>
   <Box sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}, alignItems: {md: 'center', xs: 'flex-start',
           justifyContent: 'space-between', mb: 3 }}}>
           <Box>
             <Typography variant='h4' sx={{fontWeight: 600}}>Dashboard</Typography>
             <Typography variant='subtitle1' color='text.secondary'>Welcome to your dashboard overview.</Typography>
           </Box>
         </Box>

         <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: {xs: 'center', md: 'flex-start'}, gap: 2 }}>
                  {totalStats.map((stat, index) => (
                    <Card key={index} sx={{minWidth: 250, flex: '1 1 220px', mt: 1, borderRadius: 2}}>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="subtitle1">{stat.title}</Typography>
                            {stat.icon}
                        </Box>
                            <Typography variant="h5" sx={{ mt: 4 }}>{stat.value}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{stat.desc}</Typography>
                          
                      </CardContent>
                    </Card>
                  ))}
         </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 2,
          mt: 3
        }}
      >
        {/* Recent Activity */}
        <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Recent Activity
              </Typography>
              <NotificationsActiveIcon sx={{ color: '#053563' }} />
            </Box>

            {recentActivity.map((activity, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {activity.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {activity.detail}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming This Week */}
        <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Upcoming This Week
              </Typography>
              <AccessTimeIcon sx={{ color: '#053563' }} />
            </Box>

            {upcomingEvents.map((event, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.date}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {event.guests}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Box>

   </>
  )
}

export default Dashboard
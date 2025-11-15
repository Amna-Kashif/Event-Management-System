import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import Clients from '../clients/Clients';
import Dashboard from '../dashboard/Dashboard';
import Bookings from '../booking/Bookings';
import Calender from '../calender/Calender';
import Reports from '../reports/Reports';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 } }}>{children}</Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Topbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', p: { xs: 1, sm: 1 }, mt: {md: 5} }}>
      {/* Topbar container */}
    <Box sx={{ width: {md: '45%', xs: '100%', sm: '80%'}, borderRadius: '2rem', overflow: 'hidden', borderBottom: 1, borderColor: 'divider', backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 }}> 

      <Tabs value={value} onChange={handleChange} textColor='inherit' aria-label="top navigation tabs" variant="scrollable" 
      scrollButtons allowScrollButtonsMobile centered={false} sx={{ minHeight: '2.5rem', color: '#032342ff','& .MuiTab-root': { textTransform: 'none', 
      fontWeight: 500, color: '#04213eff', minHeight: '2.5rem', px: { xs: 1, sm: 2, md: '1.5rem' }, py: '0.25rem', borderRadius: '2rem',transition: 'all 0.3s ease',
       fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' }, '&:hover': {  borderColor: '#163757ff' } },  
       '& .Mui-selected': { color: '#082440ff', }, '& .MuiTabs-indicator': { backgroundColor: '#053563ff' }, }} > 

      <Tab icon={<DashboardIcon />} iconPosition="start" label="Dashboard" {...a11yProps(0)} /> <Tab icon={<BookOnlineIcon />}
       iconPosition="start" label="Bookings" {...a11yProps(1)} /> <Tab icon={<CalendarMonthIcon />} iconPosition="start"
        label="Calendar" {...a11yProps(2)}/> <Tab icon={<PeopleIcon />} iconPosition="start" label="Clients" {...a11yProps(3)} />
         </Tabs>

          </Box>


      {/* Content */}
      <CustomTabPanel value={value} index={0}>
       <Dashboard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Bookings />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Calender />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Clients />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Reports />
      </CustomTabPanel>
    </Box>
  );
}

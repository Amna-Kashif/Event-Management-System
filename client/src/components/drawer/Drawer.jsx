import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// Custom Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PaymentIcon from '@mui/icons-material/Payment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Bookings from '../booking/Bookings';
import Calender from '../calender/Calender';
import Reports from '../reports/Reports';
import Halls from '../halls/Halls';
import Payments from '../payments/Payment';
import Clients from '../clients/Clients';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const pages = [{title: 'Dashboard', icon: <DashboardIcon />, path: '/drawer/dashboard' },{title: 'Clients', icon: <PeopleAltIcon  />, path: '/drawer/clients' }, {title: 'Halls', icon: <ApartmentIcon />, path: '/drawer/halls'}, {title: 'Bookings', icon: <BookOnlineIcon />, path: '/drawer/bookings'}, {title: 'Payments', icon: <PaymentIcon />, path: '/drawer/payments'}, {title: 'Calender', icon: <CalendarMonthIcon />, path: '/drawer/calender'}, {title: 'Reports', icon: <BarChartIcon />, path: '/drawer/reports'}]

  const drawer = (
    <div>
      <Toolbar sx={{display: 'flex', flexDirection: 'column', mt: 1.6}}>
        <Typography variant='h6' sx={{ fontWeight: 600, color: '#053563' }}> <ApartmentIcon /> Event Hub</Typography>
        <Typography variant='body2'>Hall Management System</Typography>
      </Toolbar>
      <Divider />
      <List>
        {pages.map((page, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color: '#053563'}}> {page.icon} </ListItemIcon>
              <ListItemText primary={page.title} onClick={() => navigate(page.path)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ backgroundColor: '#053563', width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar navigation"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{keepMounted: true}}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
         
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        

          <Routes>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='clients' element={<Clients />} />
            <Route path='halls' element={<Halls />} />
            <Route path='bookings' element={<Bookings />} />
            <Route path='payments' element={<Payments />} />
            <Route path='calender' element={<Calender />} />
            <Route path='reports' element={<Reports />} />
          </Routes>


      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

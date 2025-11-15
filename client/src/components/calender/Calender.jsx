import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, Button } from '@mui/material';

const halls = ['All Halls', 'Royal Garden Hall', 'Conference Room', 'Main Hall'];
const bookedEvents = {
  '2025-11-15': { title: 'Birthday Party', hall: 'Royal Garden Hall' },
  '2025-11-20': { title: 'Wedding Ceremony', hall: 'Main Hall' },
  '2025-11-25': { title: 'Conference', hall: 'Conference Room' },
};

const formatDate = (y, m, d) => `${y}-${(m + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;

const Calendar = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [hall, setHall] = useState('All Halls');

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const filteredEvents = Object.fromEntries(
    Object.entries(bookedEvents).filter(
      ([date, e]) => hall === 'All Halls' || e.hall === hall
    )
  );

  const changeMonth = (dir) => {
    let newMonth = month + dir;
    let newYear = year;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setMonth(newMonth);
    setYear(newYear);
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#f7faff', borderRadius: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 3, alignItems: 'center' }}>
        <Typography variant="h5" fontWeight={600}>
          {new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}
        </Typography>
        <Select size="small" value={hall} onChange={e => setHall(e.target.value)} sx={{ minWidth: 150 }}>
          {halls.map(h => <MenuItem key={h} value={h}>{h}</MenuItem>)}
        </Select>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button size="small" variant="outlined" onClick={() => changeMonth(-1)}>{'<'}</Button>
          <Button size="small" variant="outlined" onClick={() => { setYear(today.getFullYear()); setMonth(today.getMonth()); }}>Today</Button>
          <Button size="small" variant="outlined" onClick={() => changeMonth(1)}>{'>'}</Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 3, mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, border: '2px solid #1976d2', borderRadius: 1 }} />
          <Typography>Today</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, bgcolor: '#d0f0e0', borderRadius: 1, border: '1px solid #4caf50' }} />
          <Typography>Booked</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, bgcolor: '#fff', borderRadius: 1, border: '1px solid #ccc' }} />
          <Typography>Available</Typography>
        </Box>
      </Box>

      {/* Weekdays */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', textAlign: 'center', fontWeight: 600, color: '#555', mb: 1 }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <Box key={d}>{d}</Box>)}
      </Box>

      {/* Dates */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 1, minHeight: 300 }}>
        {[...Array(startDay)].map((_, i) => <Box key={'empty' + i} />)}
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const dateKey = formatDate(year, month, day);
          const event = filteredEvents[dateKey];
          const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

          return (
            <Box
              key={dateKey}
              title={event ? `${event.title}\n${event.hall}` : ''}
              sx={{
                borderRadius: 2,
                border: isToday ? '2px solid #1976d2' : '1px solid #ccc',
                bgcolor: event ? '#d0f0e0' : '#fff',
                p: 1,
                minHeight: 70,
                position: 'relative',
                cursor: event ? 'pointer' : 'default',
              }}
            >
              <Typography variant="body2" fontWeight={event ? 600 : 'normal'} color={event ? '#2e7d32' : 'inherit'}>
                {day}
              </Typography>
              {event && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 4,
                    left: 4,
                    right: 4,
                    bgcolor: '#fff',
                    borderRadius: 1,
                    p: '2px 4px',
                    fontSize: '0.65rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    textAlign: 'center',
                    color: '#2e7d32',
                  }}
                >
                  {event.title}<br /><small>{event.hall}</small>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Calendar;
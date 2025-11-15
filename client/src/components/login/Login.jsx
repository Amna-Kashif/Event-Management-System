import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') navigate('/drawer');
    });
  };

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '100vh', bgcolor: '#f4f6f8'
    }}>
      <Box sx={{
        width: 380, p: 4, borderRadius: 2, bgcolor: '#fff', boxShadow: 3
      }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: '#053563', mb: 2 }}>
          Login to Event Hub
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, bgcolor: '#053563', '&:hover': { bgcolor: '#03284f' } }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>
        </form>

        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
          Don’t have an account?{' '}
          <Link sx={{ cursor: 'pointer', color: '#053563' }} onClick={() => navigate('/')}>
            Create one
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') navigate('/login');
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
          Create Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
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
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
          </Button>
          {/* navigate('/login') */}
        </form>

        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
          Already have an account?{' '}
          <Link sx={{ cursor: 'pointer', color: '#053563' }} onClick={() => navigate('/login')}>
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MovingIcon from "@mui/icons-material/Moving";
import CloseIcon from "@mui/icons-material/Close";

const Payments = () => {
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  
  const handleOpen = (record) => {
    setSelectedRecord(record)
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
    setSelectedRecord(null)
  };



  const paymentSummary = [
    {
      title: "Total Revenue",
      value: "₨85,000",
      desc: "Received payments",
      icon: <AttachMoneyIcon sx={{ fontSize: 50, color: "#fff" }} />,
      gradient: "linear-gradient(135deg, #00C9A7 0%, #00A6A6 100%)",
    },
    {
      title: "Pending Payments",
      value: "₨125,000",
      desc: "Outstanding amount",
      icon: <PendingActionsIcon sx={{ fontSize: 50, color: "#fff" }} />,
      gradient: "linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)",
    },
    {
      title: "Completed Payments",
      value: "1",
      desc: "Fully paid bookings",
      icon: <CheckCircleOutlineIcon sx={{ fontSize: 50, color: "#fff" }} />,
      gradient: "linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)",
    },
  ];

  const records = [
    {
      id: "BK001",
      customer: "Ahmed Khan",
      event: "Wedding",
      total: "₨50,000",
      paid: "₨20,000",
      remaining: "₨30,000",
      status: "Partial",
    },
    {
      id: "BK002",
      customer: "Sara Ali",
      event: "Birthday Party",
      total: "₨35,000",
      paid: "₨35,000",
      remaining: "₨0",
      status: "Paid",
    },
    {
      id: "BK003",
      customer: "Hassan Raza",
      event: "Corporate Event",
      total: "₨75,000",
      paid: "₨30,000",
      remaining: "₨45,000",
      status: "Partial",
    },
    {
      id: "BK004",
      customer: "Fatima Sheikh",
      event: "Engagement",
      total: "₨50,000",
      paid: "₨0",
      remaining: "₨50,000",
      status: "Pending",
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* Heading */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: { md: "center", xs: "flex-start" },
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Payment Tracking
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Manage payments and invoices
          </Typography>
        </Box>
      </Box>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
        {paymentSummary.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                background: item.gradient,
                color: "#fff",
                borderRadius: 3,
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                p: 2,
                height: "100%",
                width: "100%",
                minWidth: 370,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Faint icon */}
              <Box
                sx={{ position: "absolute",top: 10, right: 10, opacity: 0.15,
                  pointerEvents: "none",}}> <MovingIcon sx={{ fontSize: 80 }} />{" "}  </Box>

              {/* Foreground cards content */}
              <Box sx={{ position: "relative", zIndex: 2 }}>
                <Box sx={{ mb: 1, fontSize: 50 }}>{item.icon}</Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>{item.title}</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, my: 0.5 }}>{item.value}</Typography>
                <Typography variant="caption">{item.desc}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Table Heading */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>Payment Records</Typography>
        <Typography variant="subtitle1" color="text.secondary">Track all booking payments </Typography>
      </Box>

      {/* Payment Records Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#e2dfdfff" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Booking ID</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Event</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Total</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Paid</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Remaining</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((rec, i) => (
              <TableRow key={i}>
                <TableCell>{rec.id}</TableCell>
                <TableCell>{rec.customer}</TableCell>
                <TableCell>{rec.event}</TableCell>
                <TableCell>{rec.total}</TableCell>
                <TableCell>{rec.paid}</TableCell>
                <TableCell>{rec.remaining}</TableCell>
                <TableCell>
                  {rec.status === "Paid" ? (
                    <Chip label="Paid" color="success" size="small" />
                  ) : rec.status === "Partial" ? (
                    <Chip label="Partial" color="warning" size="small" />
                  ) : (
                    <Chip label="Pending" color="error" size="small" />
                  )}
                </TableCell>
                <TableCell>
                  {rec.status === "Paid" ? (
                    <Button variant="outlined" size="small" disabled>Complete</Button>
                  ) : (
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleOpen(rec)}
                      sx={{
                        backgroundColor: "#053563",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#082440" },
                      }}
                    >
                      Add Payment
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

     {/* Form */}
<Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
  <DialogTitle>
    Record Payment
    <IconButton aria-label="close" onClick={handleClose} sx={{ position: "absolute", right: 8, top: 8 }}>
      <CloseIcon />
    </IconButton>
  </DialogTitle>

            {selectedRecord && (
  <>
  <DialogContent dividers>
    <Typography variant="subtitle1" sx={{ mb: 1 }}>
      Add payment for <b>Ahmed Khan - Wedding</b>
    </Typography>
            <Box sx={{bgcolor: '#eff6ff', p: 1, borderRadius: 1, border: '1px solid #cadefaff', mb: 1}}>

  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, fontWeight: 500 }}>
    <Typography>Total Amount:</Typography>
    <Typography>{selectedRecord.total} </Typography>
  </Box>

  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, fontWeight: 500 }}>
    <Typography>Already Paid:</Typography>
    <Typography sx={{color: '#009868'}}> {selectedRecord.paid} </Typography>
  </Box>

  <Divider sx={{ my: 1 }} />

  <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500 }}>
    <Typography>Remaining Balance:</Typography>
    <Typography sx={{ color: '#f24822' }}> {selectedRecord.remaining} </Typography>
  </Box>

            </Box>
    <TextField fullWidth type="number" label="Enter Payment" variant="outlined" 
    inputProps={{ min: 1, max: parseInt(selectedRecord.remaining.replace(/[^0-9]/g,'')) }} />

  </DialogContent>
 </>
)}

  <DialogActions>
    <Button onClick={handleClose} color="dark" variant="outlined"> Cancel </Button>
    <Button onClick={handleClose} variant="contained"
      sx={{ backgroundColor: "#053563", "&:hover": { backgroundColor: "#082440" } }}>
        Record Payment</Button>
  </DialogActions>
</Dialog>

    </Box>
  );
};

export default Payments;

import React from 'react';
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const LandingPage = () => {
  const location = useLocation();

  // Function to get the current date in a readable format
  const getCurrentDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString(undefined, options);
  };

  if (location.pathname === "/home") {
    return (
      <Box>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 4, fontSize: '3rem' }}>
          Welcome to the Patient Management Portal
        </Typography>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontSize: '2rem' }}>
          Today is {getCurrentDate()}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 10, fontSize: '1.5rem' }}>
          Here you can manage patient records, appointments, and more.
        </Typography>

        {/* Support or Help Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Need Help?
          </Typography>
          <Typography variant="body1">
            For assistance, contact support at: support@patientportal.com
          </Typography>
        </Box>
      </Box>
    );
  } else {
    return null; // If not on the home path, return null or redirect to home
  }
};

export default LandingPage;

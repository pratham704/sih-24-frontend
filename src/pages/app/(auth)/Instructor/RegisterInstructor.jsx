import React, { useState, useRef } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

export default function RegisterInstructor() {
  const navigate = useNavigate();
  const toast = useRef(null);

  const [facultyData, setFacultyData] = useState({
    faculty_name: "",
    faculty_email: "",
    faculty_password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacultyData({ ...facultyData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "/faculty/account/register",
        facultyData
      );

      if (response.data.error) {
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: "Failed to register faculty. Please try again later.",
        });
      }

      if (response.status === 200) {
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Faculty registered successfully!",
        });
        return navigate('/faculty/generic/dashboard');
      }
    } catch (error) {
      console.error("Error sending data:", error);
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to register faculty. Please try again later.",
      });
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
        padding: 20,
        backgroundImage: `url(https://64.media.tumblr.com/2ff15604eb25a26bec2876eb9c5ba050/tumblr_pww7c9Pn3y1uzwgsuo1_400.gif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ margin: "auto" }}
        >
          <Paper
            elevation={3}
            style={{
              padding: 20,
              borderRadius: 10,
              boxShadow: "0px 4px 15px rgba(8, 0, 0, 0.4)",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(5px)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <h2> Registration</h2>
            </div>
            <TextField
              name="faculty_name"
              label="Name"
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                disableUnderline: true,
                style: { borderRadius: 5 },
              }}
            />
            <TextField
              name="faculty_email"
              label="Email"
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                disableUnderline: true,
                style: { borderRadius: 5 },
              }}
            />
            <TextField
              name="faculty_password"
              label="Password"
              onChange={handleChange}
              fullWidth
              margin="normal"
              type="password"
              InputProps={{
                disableUnderline: true,
                style: { borderRadius: 5 },
              }}
            />
            <TextField
              name="confirm_password"
              label="Confirm Password"
              onChange={handleChange}
              fullWidth
              margin="normal"
              type="password"
              InputProps={{
                disableUnderline: true,
                style: { borderRadius: 5 },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
              style={{
                marginTop: 20,
                borderRadius: 20,
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              Register
            </Button>
          </Paper>
        </motion.div>
      </Grid>
      <Toast ref={toast} position="top-right" />
    </Grid>
  );
}

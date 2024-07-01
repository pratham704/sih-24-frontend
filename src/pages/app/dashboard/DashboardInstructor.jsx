import React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink } from "react-scroll";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StyledButton from "./module/StyledButton";

const stats = [
  {
    label: "Instructors With Us",
    value: "10+",
  },
  {
    label: "Courses Created",
    value: "20+",
  },
  {
    label: "Years of Experience ",
    value: "10+",
  },
];

const StatItem = ({ item }) => {
  const { value, label } = item;
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{
          color: "secondary.main",
          mb: { xs: 1, md: 2 },
          fontSize: { xs: 34, md: 44 },
          fontWeight: "bold",
        }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  );
};

const DashboardInstructor = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          id="hero"
          sx={{
            backgroundImage: "linear-gradient(to left, #FFFFFF, #E6FFE6, #FFFFFF)", 

            position: "relative",
            pt: 4,
            pb: { xs: 8, md: 10 },
          }}
          style={{
            paddingTop: "4rem",
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={0}
              sx={{ flexDirection: { xs: "column", md: "unset" } }}
            >
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      component="h2"
                      sx={{
                        position: "relative",
                        fontSize: { xs: 40, md: 72 },
                        letterSpacing: 1.5,
                        fontWeight: "bold",
                        lineHeight: 1.3,
                      }}
                    >
                      <Typography
                        component="mark"
                        sx={{
                          position: "relative",
                          color: "primary.main",
                          fontSize: "inherit",
                          fontWeight: "inherit",
                          backgroundColor: "unset",
                        }}
                      >
                        Elevate{" "}
                        <Box
                          sx={{
                            position: "absolute",
                            top: { xs: 24, md: 34 },
                            left: 2,
                            transform: "rotate(3deg)",
                            "& img": {
                              width: { xs: 146, md: 210 },
                              height: "auto",
                            },
                          }}
                        >
                          {/* eslint-disable-next-line */}
                          <img src="" />
                        </Box>
                      </Typography>
                      your{" "}
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "inherit",
                          fontWeight: "inherit",
                          position: "relative",
                          "& svg": {
                            position: "absolute",
                            top: -16,
                            right: -21,
                            width: { xs: 22, md: 30 },
                            height: "auto",
                          },
                        }}
                      >
                        Teaching
                        <svg version="1.1" viewBox="0 0 3183 3072">
                          <g id="Layer_x0020_1">
                            <path
                              fill="#127C71"
                              d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                            />
                            <path
                              fill="#127C71"
                              d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                            />
                            <path
                              fill="#127C71"
                              d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                            />
                          </g>
                        </svg>
                      </Typography>{" "}
                      <br />
                      with Innovative Methods
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
                    <Typography
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
                      {
                        "Engage your students and enhance their learning experience with interactive and dynamic teaching methods. Monitor their progress and adapt your courses to meet their needs."
                      }
                    </Typography>
                  </Box>
                  <Box sx={{ "& button": { mr: 2 } }}>
                    <ScrollLink
                      to="manage-courses"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={350}
                    >
                      <StyledButton
                        color="primary"
                        size="large"
                        variant="contained"
                        style={{
                          marginBottom: "1rem",
                        }}
                      >
                        Manage Courses
                      </StyledButton>
                    </ScrollLink>
                    <ScrollLink
                      to="view-progress"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={350}
                    >
                      <StyledButton
                        color="primary"
                        size="large"
                        variant="outlined"
                        startIcon={<PlayArrowIcon />}
                        style={{
                          marginBottom: "1rem",
                        }}
                      >
                        View Progress
                      </StyledButton>
                    </ScrollLink>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={5} sx={{ position: "relative" }}>
                {/* Certificate badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 30,
                    left: { xs: 0, md: -150 },
                    boxShadow: 1,
                    borderRadius: 3,
                    px: 2,
                    py: 1.4,
                    zIndex: 1,
                    backgroundColor: "background.paper",
                    display: "flex",
                    alignItems: "flex-start",
                    width: 280,
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: 1,
                      borderRadius: "50%",
                      width: 44,
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      "& img": { width: "32px !important", height: "auto" },
                    }}
                  >
                    <img
                      src="https://i.ibb.co/pxmdvff/certificate.png"
                      alt="Certificate icon"
                      width={50}
                      height={50}
                    />
                  </Box>
                  <Box>
                    <Typography
                      component="h6"
                      sx={{
                        color: "secondary.main",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      Certificate
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "text.secondary", lineHeight: 1.3 }}
                    >
                      Issue certificates to your students upon course
                      completion.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ lineHeight: 0 }}
                  style={{
                    width: "130%",
                  }}
                >
                  <motion.img
                    src="https://i.ibb.co/g9jFmSf/how-to-be-an-effective-online-instructor-removebg-preview.png"
                    width={1100}
                    height={787}
                    alt="Hero img"
                    style={{
                      backgroundColor: "transparent",
                      height: "60vh",
                    }}
                    initial={{ opacity: 0, x: 20 }} // Initial animation state (opacity 0 and starting position outside the viewport on the right)
                    animate={{ opacity: 1, x: 0 }} // Animation state when component mounts (opacity 1 and final position at x = 0)
                    transition={{ duration: 0.5 }} // Transition configuration (optional)
                  />
                </Box>
              </Grid>
            </Grid>

            <br />
            <br />
            <br />

            <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
              <Grid container spacing={2}>
                {stats.map((item) => (
                  <Grid key={item.value} item xs={12} md={4}>
                    <StatItem item={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </motion.div>
    </>
  );
};

export default DashboardInstructor;

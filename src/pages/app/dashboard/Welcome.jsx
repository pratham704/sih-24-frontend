import React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink } from "react-scroll";
import StyledButton from "./module/StyledButton";
import HomeFeature from "./Layouts/HomeFeatures";
import Courses from "./Layouts/Courses";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const nav = useNavigate();

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
            position: "relative",
            pt: 4,
            pb: { xs: 8, md: 10 },
          }}
          style={{
            paddingTop: "4rem",
          }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white"
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
                        color: "white",
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
                          color: "#03a9f4",
                          fontSize: "inherit",
                          fontWeight: "inherit",
                          backgroundColor: "unset",
                        }}
                      >
                        Streamline{" "}
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
                        Interview Process
                        <svg version="1.1" viewBox="0 0 3183 3072">
                          <g id="Layer_x0020_1">
                            <path
                              fill="#03a9f4"
                              d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                            />
                            <path
                              fill="#03a9f4"
                              d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                            />
                            <path
                              fill="#03a9f4"
                              d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                            />
                          </g>
                        </svg>
                      </Typography>{" "}
                      <br />
                      with Live Evaluations 

                    </Typography>
                  </Box>
                  <Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
                    <Typography sx={{ color: "#b0bec5", lineHeight: 1.6 }}>
                      {
                        "Enhance the interview process with a boardroom-like experience, offering unbiased, objective evaluations. Match questions with expertise and grade responses to assess suitability for the role."
                      }
                    </Typography>
                  </Box>
                  <Box sx={{ "& button": { mr: 2 } }}>
                    <ScrollLink
                      to="popular-course"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={350}
                      onClick={() => nav("/student/upload")}
                    >
                      <StyledButton
                        color="primary"
                        size="large"
                        variant="contained"
                        style={{
                          marginBottom: "1rem",
                        }}
                      >
                        Get Started
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
                    backgroundColor: "#1e1e1e",
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
                      backgroundColor: "#121212",
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
                        color: "#03a9f4",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      Real-time Scoring
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#b0bec5", lineHeight: 1.3 }}
                    >
                      Automatically grade the relevance of questions and responses.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ lineHeight: 0 }}>
                  <motion.img
                    src="https://i.ibb.co/VgwRHVR/file.png"
                    width={775}
                    height={787}
                    alt="Hero img"
                    style={{ backgroundColor: "transparent" }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      <Courses />
      <HomeFeature />
    </>
  );
};

export default Welcome;

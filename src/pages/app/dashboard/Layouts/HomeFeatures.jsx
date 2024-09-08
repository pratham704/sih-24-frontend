import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaPaintBrush, FaMobileAlt, FaLaptopCode } from "react-icons/fa"; // Example icons, use FontAwesome as needed

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: "#f303ff",
    }),
    ...(order === 2 && {
      backgroundColor: "#26e8bd",
    }),
    ...(order === 3 && {
      backgroundColor: "#0063ff",
    }),
  },
}));

const featureData = [
  {
    title: "UI/UI Design",
    description: "Create stunning and functional user interfaces.",
    value: 65,
    order: 1,
    icon: <FaPaintBrush />,
  },
  {
    title: "Mobile Development",
    description: "Build applications for mobile devices.",
    value: 40,
    order: 2,
    icon: <FaMobileAlt />,
  },
  {
    title: "Web Development",
    description: "Develop responsive and interactive websites.",
    value: 50,
    order: 3,
    icon: <FaLaptopCode />,
  },
];

const HomeFeature = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2, // Adjust the stagger delay as needed
          },
        },
      }}
    >
      <Box
        id="feature"
        sx={{ py: { xs: 10, md: 14 }}}
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white"
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ position: "relative" }}>
                  <img
                    src="https://i.ibb.co/3mqvPkB/home-feature.png"
                    width={650}
                    height={678}
                    alt="Feature img"
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: -36,
                      right: { xs: 0, md: -36 },
                      boxShadow: 2,
                      borderRadius: 1,
                      px: 2.2,
                      py: 1.4,
                      zIndex: 1,
                      backgroundColor: "#1e1e1e",
                      width: 190,
                    }}
                  >
                    {featureData.map((item, index) => (
                      <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" color="text.secondary">
                          {item.title}
                        </Typography>
                        <BorderLinearProgress
                          variant="determinate"
                          color="inherit"
                          value={item.value}
                          order={item.order}
                        />
                      </Box>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -12,
                      left: { xs: 0, md: -24 },
                      boxShadow: 2,
                      borderRadius: 1,
                      px: 2.2,
                      py: 2,
                      zIndex: 1,
                      backgroundColor: "#1e1e1e",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>
                        Lorem ipsum
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ mb: 1, color: "#b0bec5" }}
                      >
                        Lorem ipsum
                      </Typography>
                      <Box
                        sx={{
                          height: 85,
                          width: 85,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="h4" sx={{ color: "#32dc88" }}>
                          75%
                        </Typography>
                        <CircularProgress
                          sx={{ position: "absolute", color: "#424242" }}
                          thickness={2}
                          variant="determinate"
                          value={85}
                          size={85}
                        />
                        <CircularProgress
                          disableShrink
                          thickness={2}
                          variant="determinate"
                          value={75}
                          size={85}
                          sx={{
                            transform: "rotate(96deg) !important",
                            color: "#32dc88",
                            position: "absolute",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  component="h2"
                  sx={{
                    position: "relative",
                    fontSize: { xs: 40, md: 50 },
                    ml: { xs: 0, md: 4 },
                    mt: 2,
                    mb: 3,
                    lineHeight: 1,
                    fontWeight: "bold",
                    color: "#ffffff",
                  }}
                >
                  Make your{" "}
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
                    Learning <br />
                    <Box
                      sx={{
                        position: "absolute",
                        top: { xs: 20, md: 28 },
                        transform: "rotate(3deg)",
                        left: 2,
                        "& img": {
                          width: { xs: 140, md: 175 },
                          height: "auto",
                        },
                      }}
                    >
                      {/* <img src="/images/headline-curve.svg" alt="Headline curve" /> */}
                    </Box>
                  </Typography>
                  Enjoyable
                </Typography>

                <Typography
                  sx={{ color: "#b0bec5", mb: 2, ml: { xs: 0, md: 4 } }}
                >
                  Set the way of learning according to your wishes with some of
                  the benefits that you get us, so you on enjoy the lessons that
                  we provide.
                </Typography>

                <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
                  {featureData.map(({ title, description, icon }, index) => (
                    <Grid key={String(index)} item xs={12} md={6}>
                      <Box
                        sx={{
                          px: 2,
                          py: 1.5,
                          boxShadow: 1,
                          borderRadius: 4,
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: "#1e1e1e",
                        }}
                      >
                        <Box
                          sx={{
                            mr: 1,
                            backgroundColor: "#03a9f4",
                            borderRadius: "50%",
                            height: 36,
                            width: 36,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#ffffff",
                            "& svg": {
                              fontSize: 20,
                            },
                          }}
                        >
                          {icon}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flex: 1,
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{ fontSize: "1rem", mb: 1, color: "#03a9f4" }}
                          >
                            {title}
                          </Typography>
                          <Typography
                            sx={{ lineHeight: 1.3, color: "#b0bec5" }}
                            variant="subtitle1"
                          >
                            {description}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default HomeFeature;

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Stars from "./img/stars.png";
import Rocketman from "./img/rocketman.png";
const stars = {
  paperContainer: {
    backgroundImage: `url(${Stars})`,
  },
};
const Clear = () => {
  localStorage.clear();
};
const MainPage = () => {
  return (
    <Box
      style={stars.paperContainer}
      sx={{ bgcolor: "black", height: "100vh" }}
    >
      <Stack direction={{ sm: "column" }}>
        <Box>
          <Typography
            variant="h2"
            sx={{
              ml: "486px",
              mt: "175px",
              color: "#FE3B1F",
              fontFamily: "Rowdies",
            }}
          >
            Register
          </Typography>
        </Box>
        <Box
          sx={{
            width: "20%",
            ml: "42%",
            mt: "120px",
          }}
        >
          <Link underline="none" href="personalinfo">
            <Button
              onClick={Clear}
              variant="contained"
              sx={{
                bgcolor: "#FE3B1F",
                "&:hover": {
                  background: "#FE3B1F",
                },
                borderRadius: 7,
                fontFamily: "Montserrat",
                fontSize: "17px",
              }}
            >
              Start Questionnaire
            </Button>
          </Link>
        </Box>

        <Box sx={{ width: "17%", ml: "43.8%", height: "50$" }}>
          <Link href="aplications" underline="always">
            <Button
              sx={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                mt: "15px",
                color: "white",
                bgcolor: "black",
                "&:hover": {
                  background: "black",
                },
              }}
              variant="text"
            >
              Submitted Applications
            </Button>
          </Link>
        </Box>
        <Box sx={{ ml: "39%" }}>
          <img className="Rocketman" src={Rocketman} alt="Rocketman" />
        </Box>
      </Stack>
    </Box>
  );
};
export default MainPage;

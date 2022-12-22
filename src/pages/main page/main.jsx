import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Stars from "./img/ASpot_Register.jpg";
import registr from "./img/register-14.png";
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
              color: "red",
              fontFamily: "Rowdies",
            }}
          ></Typography>
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
                bgcolor: "green",
                "&:hover": {
                  background: "black",
                },
                borderRadius: 7,
                fontFamily: "Montserrat",
                fontSize: "17px",
              }}
            >
              Enter your information
            </Button>
          </Link>
        </Box>

        <Box sx={{ width: "17%", ml: "43.8%", height: "50$" }}>
          <Link href="aplications" underline="none">
            <Button
              sx={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                mt: "15px",
                color: "white",
                bgcolor: "red",
                ml: "13px",
                "&:hover": {
                  background: "blue",
                },
              }}
              variant="text"
            >
              Submitted Applications
            </Button>
          </Link>
        </Box>
        <Box sx={{ ml: "41%" }}>
          <img className="registr" src={registr} alt="onoo" />
        </Box>
      </Stack>
    </Box>
  );
};
export default MainPage;

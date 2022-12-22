import { Box } from "@mui/system";
import * as React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ThankPage = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <>
      <Box
        justifyContent="center"
        sx={{ bgcolor: "black", height: "100vh", textAlign: "center" }}
      >
        <Typography sx={{ mb: 30 }}>"</Typography>
        <Typography
          sx={{ fontFamily: "Montserrat", fontSize: "64px", color: "#FE3B1F" }}
        >
          Thanks for Joining 😊
        </Typography>
      </Box>
    </>
  );
};
export default ThankPage;

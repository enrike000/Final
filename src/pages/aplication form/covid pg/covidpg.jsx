import { Box, Grid } from "@mui/material";
import React from "react";
import CInfoRight from "./left and right side/CInfoRight";
import CInfoLeft from "./left and right side/CInfoLeft";
const CovidPg = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <CInfoLeft />
        </Grid>
        <Grid sx={{ bgcolor: "red", height: "166vh" }} item xs={6}>
          <CInfoRight />
        </Grid>
      </Grid>
    </Box>
  );
};
export default CovidPg;

import { Box, Grid } from "@mui/material";
import React from "react";
import PInfoLeft from "./left and right side/PInfoLeft";
import PInfoRight from "./left and right side/PInfoRight";

const PersonalInfo = () => {
  return (
    <>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <PInfoLeft />
          </Grid>
          <Grid sx={{ bgcolor: "red", height: "101vh" }} item xs={6}>
            <PInfoRight />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default PersonalInfo;

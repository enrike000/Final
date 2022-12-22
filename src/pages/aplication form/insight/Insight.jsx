import { Box, Grid } from "@mui/material";
import React from "react";
import InsightLeft from "./left and right side/InsightLeft";
import InsightRight from "./left and right side/InsightRight";

const InsigtPg = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <InsightLeft />
        </Grid>
        <Grid sx={{ bgcolor: "red", height: "101vh" }} item xs={6}>
          <InsightRight />
        </Grid>
      </Grid>
    </Box>
  );
};
export default InsigtPg;

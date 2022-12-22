import { Box, Grid } from "@mui/material";
import React from "react";
import TechSkillLeft from "./left and right side/TechSkillLeft";
import TechSkillRight from "./left and right side/TechSkillRight";
const Techskill = () => {
  return (
    <>
      <Box>
        <Grid container spacing={1}>
          <Grid sx={{ bgcolor: "white", height: "101vh" }} item xs={6}>
            <TechSkillLeft />
          </Grid>
          <Grid sx={{ bgcolor: "red", height: "101vh" }} item xs={6}>
            <TechSkillRight />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Techskill;

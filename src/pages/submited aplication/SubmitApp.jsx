import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import * as React from "react";
import Acordion from "./Acordion";
const SubmitApp = () => {
  const [postinfo, setPostinfo] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://bootcamp-2022.devtest.ge/api/applications?token=75432f6e-fdb5-4820-b1f1-0c7ce6db6f91"
        );
        setPostinfo(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  console.log(postinfo);
  return (
    <>
      <Box sx={{ bgcolor: "black", height: "100vh" }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "Rowdies",
              color: "white",
              fontSize: "56px",
              ml: "359px",
            }}
          >
            Submitted Applications
          </Typography>
          {postinfo && postinfo.map((e) => <Acordion key={e.id} object={e} />)}
          <Typography>Go back</Typography>
        </Box>
      </Box>
    </>
  );
};
export default SubmitApp;

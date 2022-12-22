import { Typography } from "@mui/material";

const CInfoRight = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          ml: "100px",
          mt: "85px",
          color: "black",
          fontFamily: "Rowdies",
        }}
      >
        do you have contact
      </Typography>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          color: "black",
          ml: "100px",
          mt: "80px",
          fontSize: "21px",
        }}
      >
        If you have had contact with covid then you <br /> should move to
        Greenland
      </Typography>
    </>
  );
};
export default CInfoRight;

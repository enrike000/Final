import { Typography } from "@mui/material";

const TechSkillRight = () => {
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
        Enter your skills
      </Typography>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          color: "black",
          ml: "100px",
          mt: "90px",
          fontSize: "21px",
        }}
      >
        We need people <br /> with different skills and experience <br /> so
        please enter your experience correctly
      </Typography>
    </>
  );
};
export default TechSkillRight;

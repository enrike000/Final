import {
  Box,
  Button,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CircleIcon from "@mui/icons-material/Circle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const InsightLeft = () => {
  const navigate = useNavigate();

  const [devtalks, setDevtalks] = React.useState("");
  const [aboutDevtalks, setAboutDevtalks] = React.useState("");
  const [something, setSomething] = React.useState("");

  var insight = {
    will_organize_devtalk: devtalks,
    devtalk_topic: aboutDevtalks,
    something_special: something,
  };

  const nextpg = () => {
    if (devtalks === "") {
      toast.error("Choose whether or not to attend Devtalks");
    } else if (devtalks === true && aboutDevtalks === "") {
      toast.error("The entry field should not be empty!");
    } else if (something === "") {
      toast.error("The entry field should not be empty!");
    } else {
      navigate("/submit");
      localStorage.setItem("insight", JSON.stringify(insight));
    }
  };
  const prevpg = (e) => {
    e.preventDefault();
    navigate("/covidpg");
  };
  const first = () => {
    navigate("/personalinfo");
  };
  const second = () => {
    navigate("/TechSkill");
  };
  const third = () => {
    navigate("/covidpg");
  };
  return (
    <>
      <ToastContainer />
      <Typography
        sx={{
          color: "#FE3B1F",
          fontSize: "50px",

          mt: "61PX",
          ml: "30%",
          fontFamily: "Rowdies",
        }}
      >
        What about you?
      </Typography>

      <Box
        sx={{
          mt: "120PX",
          ml: "125px",
        }}
      >
        <FormLabel
          sx={{ color: "black", fontSize: "16px", fontFamily: "Montserrat" }}
          id="demo-controlled-radio-buttons-group"
        >
          Would you attend Devtalks and maybe also organize your own?
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={devtalks}
          onChange={(e) => setDevtalks(e.target.value)}
        >
          <FormControlLabel
            value={true}
            control={<Radio />}
            label={
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                }}
              >
                Yes
              </Typography>
            }
          />
          <FormControlLabel
            value={false}
            control={<Radio />}
            label={
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  color: "black",
                }}
              >
                No
              </Typography>
            }
          />
        </RadioGroup>
      </Box>
      {devtalks === "true" ? (
        <Box
          sx={{
            mt: "30PX",
            ml: "125px",
          }}
        >
          <Typography
            sx={{ color: "black", fontSize: "16px", fontFamily: "Montserrat" }}
            id="demo-controlled-radio-buttons-group"
          >
            What would you speak about at Devtalk?
          </Typography>
          <TextField
            sx={{ fontFamily: "Montserrat", width: "400px" }}
            placeholder="I would..."
            multiline
            rows={3}
            value={aboutDevtalks}
            onChange={(e) => setAboutDevtalks(e.target.value)}
          />
        </Box>
      ) : null}

      <Box
        sx={{
          mt: "30PX",
          ml: "125px",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "16px",
            fontFamily: "Montserrat",
            mb: "2px",
          }}
          id="demo-controlled-radio-buttons-group"
        >
          Tell us something special
        </Typography>
        <TextField
          sx={{ fontFamily: "Montserrat", width: "400px" }}
          placeholder="I..."
          multiline
          rows={1}
          value={something}
          onChange={(e) => setSomething(e.target.value)}
        />{" "}
        <br />
      </Box>
      <Box sx={{ width: "50%", ml: "160px", mt: "40px" }}>
        <Button onClick={prevpg}>
          <NavigateBeforeIcon />
        </Button>
        <IconButton size="small" onClick={first}>
          <CircleIcon sx={{ color: "#FE3B1F" }} />
        </IconButton>
        <IconButton size="small" onClick={second}>
          <CircleIcon sx={{ color: "#FE3B1F" }} />
        </IconButton>{" "}
        <IconButton size="small" onClick={third}>
          <CircleIcon sx={{ color: "#FE3B1F" }} />
        </IconButton>{" "}
        <IconButton size="small" onClick={""}>
          <CircleIcon sx={{ color: "#FE3B1F" }} />
        </IconButton>{" "}
        <IconButton disabled size="small" onClick={""}>
          <CircleIcon sx={{ color: "#ed7272" }} />
        </IconButton>{" "}
        <Button onClick={nextpg}>
          <NavigateNextIcon />
        </Button>
      </Box>
    </>
  );
};
export default InsightLeft;

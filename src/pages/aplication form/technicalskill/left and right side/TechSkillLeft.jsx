/* eslint-disable no-useless-concat */
import { Button, IconButton, TextField, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TechSkillLeft = () => {
  const navigate = useNavigate();

  const [skill, setSkill] = useState([]);
  const [chosenSkill, setChosenSkill] = useState("");

  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState("");

  var techskill = {
    skills,
  };
  console.log(chosenSkill);
  const url = "https://bootcamp-2022.devtest.ge/api/skills";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSkill(data);
      });
  }, []);

  const addItem = () => {
    if (chosenSkill === "") {
      toast.error("აირჩიე სკილი");
    } else if (experience === "") {
      toast.error("შეიყვანე გამოცდილება");
    } else {
      setSkill((prev) => prev.filter((el) => el.title !== chosenSkill));
      setSkills([...skills, { id: chosenSkill, experience }]);
    }
  };

  const remove = (id) => {
    const tmp = skills.filter((e) => id !== e.id);
    setSkills(tmp);
  };
  const nextpg = () => {
    if (skills.length === 0) {
      toast.error("Add at least 1 skill!");
    } else {
      navigate("/covidpg");
    }

    localStorage.setItem("techskill", JSON.stringify(techskill));
  };
  const prevpg = () => {
    navigate("/personalinfo");
  };
  const first = () => {
    navigate("/personalinfo");
  };
  return (
    <>
      <ToastContainer />

      <Typography
        sx={{
          color: "black",
          fontSize: "50px",
          p: "8%",
          mt: 3,
          ml: 4,
          fontFamily: "Rowdies",
          mb: "20px",
        }}
      >
        enter your skils
      </Typography>
      <Box sx={{ mt: "30px", ml: "140px" }}>
        <FormControl sx={{ width: "60%" }}>
          <InputLabel
            sx={{ fontFamily: "Montserrat", color: "red" }}
            id="demo-simple-select-label"
          >
            Skill
          </InputLabel>
          <Select
            label="skill"
            value={chosenSkill}
            displayEmpty={true}
            onChange={(e) => setChosenSkill(e.target.value)}
          >
            {skill
              .filter((el) => !skills.includes({ title: el.title }))
              .map((e) => {
                return <MenuItem value={e.id}>{e.title}</MenuItem>;
              })}
          </Select>
        </FormControl>{" "}
        <br />
        <TextField
          onChange={(e) => setExperience(e.target.value)}
          sx={{
            width: "60%",
            mt: "30px",
            fontFamily: "Montserrat",
          }}
          id="outlined-basic"
          label="Experience Duration in Years"
          required
          variant="outlined"
        />{" "}
        <br />
        <Button
          sx={{
            width: "200px",
            fontSize: "9.1px",
            mt: "30px",
            ml: "160px",
            bgcolor: "#FE3B1F",
            "&:hover": {
              bgcolor: "black",
            },
            fontFamily: "Montserrat",
          }}
          variant="contained"
          onClick={() => addItem()}
        >
          ADD
        </Button>
        {}
      </Box>
      {skills.map((e) => {
        return (
          <>
            <Box sx={{ mt: "10px", ml: "140px" }}>
              <TextField
                sx={{
                  width: "60%",
                  mt: "10px",
                  fontFamily: "Montserrat",
                  fontSize: "11px",
                  color: "black",
                }}
                disabled
                id="outlined-disabled"
                defaultValue={"      " + "Years of Experience:" + e.experience}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{e.id}</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        sx={{ color: "#EB3535" }}
                        onClick={() => remove(e.id)}
                      >
                        <RemoveCircleOutlineIcon />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </>
        );
      })}
      <Box sx={{ width: "50%", ml: "160px", mt: "40px" }}>
        <Button onClick={prevpg}>
          <NavigateBeforeIcon />
        </Button>
        <IconButton size="small" onClick={first}>
          <CircleIcon sx={{ color: "#FE3B1F" }} />
        </IconButton>
        <IconButton size="small">
          <CircleIcon sx={{ color: "#FE3B1F" }} />
        </IconButton>{" "}
        <IconButton disabled size="small">
          <CircleIcon sx={{ color: "#ed7272" }} />
        </IconButton>{" "}
        <IconButton disabled size="small">
          <CircleIcon sx={{ color: "#ed7272" }} />
        </IconButton>{" "}
        <IconButton disabled size="small">
          <CircleIcon sx={{ color: "#ed7272" }} />
        </IconButton>{" "}
        <Button onClick={nextpg}>
          <NavigateNextIcon />
        </Button>
      </Box>
    </>
  );
};
export default TechSkillLeft;

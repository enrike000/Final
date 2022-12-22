/* eslint-disable no-useless-escape */
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PInfoLeft = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const emailRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();
  const lastNameRef = useRef();
  var PersonalInfo = {
    firstName,
    lastName,
    phone,
    email,
  };

  const nextpg = (e) => {
    if (firstName.length < 2 || "") {
      toast.error("სახელი უნდა შეიცავდეს 2 ასოსზე მეტს");
    } else if (lastName.length < 2 || "") {
      toast.error("გვარი უნდა შეიცავდეს ორ ასოზე მეტს");
    } else if (email === "") {
      toast.error("ემაილის ველი ცარიელია");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error("შეიყვანე არსებული მაილი ;@");
    } else if (phone.length < 9 || phone === "" || phone.length > 13) {
      toast.error("შეიყვანეთ სწორი ტელეფონის ნომერი");
    } else {
      localStorage.setItem("PersonalInfo", JSON.stringify(PersonalInfo));
      navigate("/TechSkill");
    }
  };

  const multipleInput = [
    {
      value: firstName,
      label: "სახელი",
      inputRef: nameRef,
      autoComplete: "name",
      setValue: setFirstName,
      type: "text",
    },
    {
      value: lastName,
      label: "გვარი",
      inputRef: lastNameRef,
      autoComplete: "lastname",
      setValue: setLastName,
      type: "text",
    },
    {
      value: email,
      label: "ემაილი",
      inputRef: emailRef,
      autoComplete: "email",
      setValue: setEmail,
      type: "email",
    },
    {
      value: phone,
      label: "+995 5XX-XX-XX-XX",
      inputRef: phoneRef,
      autoComplete: "name",
      setValue: setPhone,
      type: "phone",
    },
  ];
  return (
    <>
      <ToastContainer />
      <Typography
        sx={{
          color: "#FE3B1F",
          fontSize: "50px",
          p: "8%",
          mt: 3,
          ml: 4,
          fontFamily: "Rowdies",
          mb: "20px",
        }}
      ></Typography>
      <Box sx={{ ml: "140px", mb: "30px" }}>
        {multipleInput.map((item) => {
          return (
            <Grid item sm={8}>
              <TextField
                sx={{ mt: "20px" }}
                autoComplete={item.autoComplete}
                fullWidth
                value={item.value}
                onChange={(e) => item.setValue(e.target.value)}
                label={item.label}
                InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                inputRef={item.inputRef}
                type={item.type}
              />
            </Grid>
          );
        })}
      </Box>
      <Box sx={{ width: "50%", ml: "160px", mt: "40px" }}>
        <Button disabled sx={{ color: "red" }}>
          <NavigateBeforeIcon />
        </Button>
        <IconButton size="small">
          <CircleIcon sx={{ color: "#FE3B1F" }} />
        </IconButton>
        <IconButton disabled size="small">
          <CircleIcon sx={{ color: "#ed7272" }} />
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
        <Button sx={{ color: "red" }} onClick={nextpg}>
          <NavigateNextIcon />
        </Button>
      </Box>
    </>
  );
};
export default PInfoLeft;

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SubmitPg = () => {
  const navigate = useNavigate();
  var Vacinated = JSON.parse(localStorage.getItem("covid")).vaccinated;
  if (Vacinated === "true") {
    Vacinated = true;
  } else {
    Vacinated = false;
  }
  var will_organize_devtalk = JSON.parse(
    localStorage.getItem("insight")
  ).will_organize_devtalk;
  if (will_organize_devtalk === "true") {
    will_organize_devtalk = true;
  } else {
    will_organize_devtalk = false;
  }
  var covidcontact = JSON.parse(localStorage.getItem("covid")).had_covid;
  if (covidcontact === "true") {
    covidcontact = true;
  } else {
    covidcontact = false;
  }
  const data = {
    token: "75432f6e-fdb5-4820-b1f1-0c7ce6db6f91",
    first_name: JSON.parse(localStorage.getItem("PersonalInfo")).lastName,
    last_name: JSON.parse(localStorage.getItem("PersonalInfo")).firstName,
    email: JSON.parse(localStorage.getItem("PersonalInfo")).email,
    phone: JSON.parse(localStorage.getItem("PersonalInfo")).phone,
    skills: JSON.parse(localStorage.getItem("techskill")).skills,
    work_preference: JSON.parse(localStorage.getItem("covid")).work_preference,

    had_covid: covidcontact,
    had_covid_at: JSON.parse(localStorage.getItem("covid")).had_covid_at,
    vaccinated: Vacinated,
    vaccinated_at: JSON.parse(localStorage.getItem("covid")).vaccinated_at,
    will_organize_devtalk: will_organize_devtalk,
    devtalk_topic: JSON.parse(localStorage.getItem("insight")).devtalk_topic,
    something_special: JSON.parse(localStorage.getItem("insight"))
      .something_special,
  };
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://bootcamp-2022.devtest.ge/api/application", data)

      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
    navigate("/thankpg");
  };

  const back = (e) => {
    e.preventDefault();
    navigate("/InsigtPg");
  };
  return (
    <>
      <Box sx={{ bgcolor: "black", height: "100vh" }}>
        <Button
          onClick={submit}
          variant="contained"
          sx={{
            bgcolor: "#FE3B1F",
            "&:hover": {
              background: "#FE3B1F",
            },
            borderRadius: 7,
            fontFamily: "Montserrat",
            fontSize: "17px",
            mt: "300px",
            ml: "638px",
            width: "15%",
          }}
        >
          Call me
        </Button>{" "}
        <br />
        <Link underline="always">
          <Button
            onClick={back}
            sx={{
              fontFamily: "Montserrat",
              fontSize: "12px",
              mt: "15px",
              ml: "710px",

              color: "white",
              bgcolor: "black",
              "&:hover": {
                background: "black",
              },
            }}
            variant="text"
          >
            Go back{" "}
          </Button>
        </Link>
      </Box>
    </>
  );
};
export default SubmitPg;

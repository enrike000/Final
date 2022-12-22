import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
const Acordion = (props) => {
  return (
    <>
      <Accordion sx={{ bgcolor: "red" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "white" }}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  color: "#FE3B1F",
                  mb: "40px",
                }}
              >
                Personal Information
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography sx={{ fontFamily: "Montserrat" }}>
                    First Name <br /> <br /> <br />
                    Last Name <br /> <br /> <br />
                    E Mail <br /> <br /> <br />
                    Phone
                  </Typography>
                </Grid>
                <Grid sx={{}} item xs={6}>
                  <Typography>
                    {" "}
                    {props.object.first_name}
                    <br /> <br /> <br />
                    {props.object.last_name} <br /> <br /> <br />
                    {props.object.email} <br /> <br /> <br />
                    {props.object.phone}
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                sx={{ color: "#FE3B1F", mt: "50px", fontSize: "25px" }}
              >
                {" "}
                Covid Situation
              </Typography>
              <Typography sx={{ mt: "50px", fontSize: "25px" }}>
                how would you prefer to work?
              </Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue={props.object.work_preference}
              >
                <FormControlLabel
                  disabled
                  value="from_ofice"
                  control={<Radio />}
                  label={
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                      }}
                    >
                      From Sairme Office
                    </Typography>
                  }
                />
                <FormControlLabel
                  disabled
                  value="from_home"
                  control={<Radio />}
                  label={
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      Home
                    </Typography>
                  }
                />
                <FormControlLabel
                  disabled
                  value="from_hybrid"
                  control={<Radio />}
                  label={
                    <Typography
                      sx={{ fontFamily: "Montserrat", fontSize: "14px" }}
                    >
                      Hybrid
                    </Typography>
                  }
                />
              </RadioGroup>
              <Typography sx={{ mt: "50px", fontSize: "25px" }}>
                Did you have covid 19?
              </Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue={props.object.had_covid}
              >
                <FormControlLabel
                  disabled
                  value={true}
                  control={<Radio />}
                  label={
                    <Typography
                      sx={{ fontFamily: "Montserrat", fontSize: "14px" }}
                    >
                      Yes
                    </Typography>
                  }
                />
                <FormControlLabel
                  disabled
                  value={false}
                  control={<Radio />}
                  label={
                    <Typography
                      sx={{ fontFamily: "Montserrat", fontSize: "14px" }}
                    >
                      No
                    </Typography>
                  }
                />
              </RadioGroup>
              <Typography sx={{ mt: "50px", fontSize: "25px" }}>
                When did you have covid 19?
              </Typography>
              <LocalizationProvider
                defaultValue={props.object.had_covid_at}
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  disabled
                  disableFuture
                  defaultValue={props.object.had_covid_at}
                  label="Date"
                  openTo="year"
                  views={["year", "month", "day"]}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ width: "400px" }} />
                  )}
                />
              </LocalizationProvider>
              <Typography sx={{ mt: "50px", fontSize: "25px" }}>
                Have you been vaccinated?
              </Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue={props.object.vaccinated}
              >
                <FormControlLabel
                  value={true}
                  disabled
                  control={<Radio />}
                  label={
                    <Typography
                      sx={{ fontFamily: "Montserrat", fontSize: "14px" }}
                    >
                      Yes
                    </Typography>
                  }
                />
                <FormControlLabel
                  value={false}
                  disabled
                  control={<Radio />}
                  label={
                    <Typography
                      sx={{ fontFamily: "Montserrat", fontSize: "14px" }}
                    >
                      No
                    </Typography>
                  }
                />
              </RadioGroup>
              <Typography sx={{ mt: "50px", fontSize: "25px" }}>
                When did you get covid vaccine?
              </Typography>
              <LocalizationProvider
                defaultValue={props.object.vaccinated_at}
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  disabled
                  disableFuture
                  defaultValue={props.object.vaccinated_at}
                  label="Date"
                  openTo="year"
                  views={["year", "month", "day"]}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ width: "400px" }} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid sx={{}} item xs={6}>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  color: "#FE3B1F",
                  mb: "40px",
                }}
              >
                Personal Information
              </Typography>
              <Typography>
                {props.object.skills[0].id} Years of experience
                {props.object.skills[0].experience}
              </Typography>
              <Typography
                sx={{ color: "#FE3B1F", mt: "50px", fontSize: "25px" }}
              >
                {" "}
                Insigts
              </Typography>
              <Typography sx={{ mt: "50px", fontSize: "25px" }}>
                Would you attend Devtalks and maybe also organize your own?
              </Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue={props.object.will_organize_devtalk}
              >
                <FormControlLabel
                  value={true}
                  disabled
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
                  disabled
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
              <Typography sx={{ mt: "50px", fontSize: "25px" }}>
                What would you speak about at Devtalk?
              </Typography>
              <TextField
                sx={{ fontFamily: "Montserrat", width: "400px" }}
                placeholder={props.object.devtalk_topic}
                multiline
                disabled
                rows={3}
              />
              <Typography sx={{ mt: "50px", fontSize: "25px" }}>
                Tell us somthing special
              </Typography>
              <TextField
                sx={{ fontFamily: "Montserrat", width: "400px" }}
                placeholder={props.object.something_special}
                multiline
                disabled
                rows={3}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
export default Acordion;

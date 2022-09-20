import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
// import axios from "axios";
import { axiosInstance } from "../../../../services/axiosInstance";
import { API_ENDPOINTS } from "../../../../services/api-url";

const Signup = () => {
  const paperStyle = { padding: "0px 20px 40px 15px", width: 400, margin: "20px auto" };
  const avatarStyle = { backgroundColor: "blue" };
  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: "5px" };
  const radioStyle = { display: "inline" };

  async function makePostRequest(queryObj) {
    console.log(queryObj);
    // const EMP_END_POINT = "/Employee/SignUpEmployee";
    // const URL = `${BASE_URL}${EMP_END_POINT}`;
    // console.log(`${BASE_URL}${EMP_END_POINT}`)
    try {
      const data = {
        experience: "NA",
        name: "NA",
        gender: "NA",
        email: "NA",
        position: "NA",
        dob: "2022-09-15T05:16:14.174Z",
        doj: "2022-09-15T05:16:14.174Z",
        address: "NA",
        qualification: "NA",
        mobile: "NA",
      };

      const response = await axiosInstance.post(API_ENDPOINTS.signup, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    // const response = await axios.post(`${BASE_URL}${EMP_END_POINT}`)
    // axios.post(path, queryObj).then(
    //     (response) => {
    //         var result = response.data;
    //         console.log(result);
    //     },
    //     (error) => {
    //         console.log(error);
    //     }
    // );
  }
  // const headers = {
  //   "Content-Type": "text/json"
  // };
  const validationSchema = yup.object({
    Name: yup.string("Enter Name").required("Name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      gender: "",
      position: "",
      phoneNumber: "",
      address: "",
      qualification: "",
      dateofBirth: "",
      dateofjoining: "",
      Experience: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("first", formik.errors);
      const queryObj = {
        name: values.Name,
        email: values.email,
        gender: values.gender,
        position: values.position,
        mobile: values.phoneNumber,
        address: values.address,
        qualification: values.qualification,
        dob: values.dateofBirth,
        doj: values.dateofjoining,
        experience: values.Experience,
      };

      makePostRequest(queryObj);
      // axios.post(url, { values })
      // .then(res => {
      //   console.log(res);
      //   console.log(res.data);
      // }
      // )
    },
  });

  const { handleChange, handleSubmit, values, errors, touched } = formik;
  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>SS</Avatar>
          <h2 style={headerStyle}> Employee Information</h2>
        </Grid>
        <Typography variant="caption" align="center">
          <h4> Fill employee Information </h4>
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="Name"
            name="Name"
            label="Name"
            placeholder="Enter your name"
            value={values.Name}
            onChange={handleChange("Name")}
            error={touched.Name && Boolean(errors.Name)}
            helperText={touched.Name && errors.Name}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="dateofBirth"
            //type="date"
            name="dateofBirth"
            label="DateofBirth"
            placeholder="DateofBirth"
            value={values.dateofBirth}
            onChange={handleChange("dateofBirth")}
          />
          <br />
          <br />
          <FormControl style={marginTop}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              onChange={handleChange("gender")}
              name="gender"
              style={radioStyle}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            id="position"
            name="position"
            label="Position"
            placeholder="Enter your Position"
            value={values.position}
            onChange={handleChange("position")}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            placeholder="Enter your email address"
            value={values.email}
            onChange={handleChange("email")}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="dateofjoining"
            name="dateofjoining"
            label="Dateofjoining"
            placeholder="Enter your dateofjoining"
            value={values.dateofjoining}
            onChange={handleChange("dateofjoining")}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="phoneNumber"
            placeholder="Enter your phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange("phoneNumber")}
          />
          <br />
          <br />

          <TextField
            fullWidth
            id="address"
            name="address"
            label="Address"
            placeholder="Enter your Address"
            value={values.address}
            onChange={handleChange("address")}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="qualification"
            name="qualification"
            label="Qualification"
            placeholder="Enter your Qualification"
            value={values.qualification}
            onChange={handleChange("qualification")}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="Experience"
            name="Experience"
            label="Experience"
            placeholder="Enter your Experience"
            value={values.Experience}
            onChange={handleChange("Experience")}
          />
          <br />
          <br />

          <Button type="submit"
           variant="contained"
            color="primary"
             align="center">
            Save
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
export default Signup;

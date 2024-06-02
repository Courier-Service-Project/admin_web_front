import React, { useState } from "react";
import axios from "axios";
import Notifi from "../../Components/Notification/Notifi";
import Pulseloader from "react-spinners/PulseLoader";
import { ToastContainer } from "react-toastify";
import {
  Paper,
  TextField,
  Button,
  Link,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import Error from "../../Components/Notification/Error";
import { useNavigate } from "react-router-dom";
import { HomeScreenStyles, picts, btn, link } from "./SigninStyles";
import { BACKEND_URL } from "../../Constants/index";
import * as yup from "yup";
import { useFormik } from "formik";

export default function SignIn() {
  const navigation = useNavigate();
  const [error,setError] = useState(null);
  const [loading, setLoading] = useState(false)

  //Validation Schema
  const validationSchema = yup.object({
    userName: yup.string("Enter your emai").required("UserName is required").email("Enter valid Email"),
    password: yup
      .string("Enter your password")
      .required("Password is required"),
  });

  //Axios call
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      setLoading(true)
      axios
        .post("http://localhost:9000/admin",{
          userName: values.userName,
          password: values.password,
        })
        .then(function (response) {
          setLoading(false)
          if (response.data.success === 1) {
            // const msg = "Login SuccessFully";
            // Notifi(msg);
            navigation("/dashboard");

          } else {
            setError("Invalid Username or Password, Please try again.")
            // const msg = "Invalid Email / Password ";
            // Error(msg);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={HomeScreenStyles}>
        <Paper elevation={10}>
          <Stack direction="row">
            <Box sx={picts} width={"530px"}></Box>
            <Box>
              <Box
                sx={{ height: "470px", width: "330px", p: "20px", pt: "30px" }}
              >
                <Box align="center">
                  <Typography variant="h3">Xpress</Typography>
                  <Typography variant="h5" gutterBottom>
                    Sign In
                  </Typography>
                </Box>
                <Box>
                  <Box>
                    <Box sx={{ mt: "15px", mb: "20px" }} id="uper">
                      <TextField
                        label="UserName"
                        variant="standard"
                        name="userName"
                        fullWidth
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.userName &&
                          Boolean(formik.errors.userName)
                        }
                        helperText={
                          formik.touched.userName && formik.errors.userName
                        }
                      />
                    </Box>
                    <Box sx={{ mt: "5px", mb: "15px" }}>
                      <TextField
                        label="Password"
                        type="password"
                        variant="standard"
                        name="password"
                        fullWidth
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                      />
                    </Box>
                    <Typography sx={{color:"red",fontSize:"13px"}}> {error? error : ""}</Typography>
                    <Button
                      type="submit"
                      variant="contained"
                      id="btn"
                      sx={btn}
                      fullWidth
                    >
                      Sign In <span style={{margin:"0 5px"}}></span><Pulseloader
                          color={"white"}
                          loading={loading}
                          size={6}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                    </Button>
                    <Typography>
                      <Link sx={link} href="#">
                        Forgot password?
                      </Link>
                    </Typography>
                    <Typography sx={{ fontSize: 13 }}>
                      {" "}
                      Access to the admin panel requires an account. without
                      one, entry is not permitted.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Stack>
          <ToastContainer />
        </Paper>
      </Box>
    </form>
  );
}

import React, { useState } from "react";
import dayjs from "dayjs";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/action/user";
import AuthLayout from "./AuthLayout";

const checkoutSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  dob: yup
    .date()
    .nullable()
    .max(dayjs().subtract(18, "years").toDate(), "Must be at least 18 years old")
    .required("Date of Birth is required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  dob: null,
};

function SignUp() {
  const age = dayjs().subtract(18, "years");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const handleFormSubmit = (values) => {
    setIsSubmitting(true);

    console.log("Form Values:", values);
    const dobDate = values.dob.toDate();
    console.log("Date of Birth:", dobDate);

    dispatch(register(values));

  };

  return (
    <AuthLayout>
          <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <Box  component="form">
          <h2>SignUp to get started</h2>
          <TextField
            fullWidth
            required
            type="text"
            label="Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            name="name"
            error={(!!touched.name || isSubmitting) && !!errors.name}
            helperText={(touched.name || isSubmitting) && errors.name}
            margin="dense"
          />
          <TextField
            fullWidth
            required
            type="text"
            label="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            name="email"
            error={(!!touched.email || isSubmitting) && !!errors.email}
            helperText={(touched.email || isSubmitting) && errors.email}
            margin="dense"
          />

          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            required
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            error={(!!touched.password || isSubmitting) && !!errors.password}
            helperText={(touched.password || isSubmitting) && errors.password}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                label="Date of birth"
                slotProps={{
                  textField: { variant: "outlined", required: true },
                }}
                value={values.dob}
                onChange={(date) =>
                  handleChange({ target: { name: "dob", value: date } })
                }
                onBlur={handleBlur}
                helperText={(touched.dob || isSubmitting) && errors.dob}
                maxDate={age}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          {errors.dob && (touched.dob || isSubmitting) && (
            <div
              style={{
                color: "red",
                fontSize: "12px",
                paddingLeft: "20px",
              }}
            >
              {errors.dob}
            </div>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <NavLink style={{ color: "var(--primary)" }} to={"/login"}>
              {"Already have an account? Sign In"}
            </NavLink>
          </Box>

          <Box className="button-auth">
            <Button
              variant="contained"
              fullWidth
              type="button"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
    </AuthLayout>
  );
}

export default SignUp;

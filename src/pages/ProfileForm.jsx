import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const currencies = [
  {
    value: "User",
    label: "User",
  },
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
];

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const ProfileForm = () => {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("Done");
    handleClick();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="row" spacing={2}>
        <TextField
          error={Boolean(errors.FirstName)}
          helperText={
            errors.FirstName
              ? "First Name is Required..! & Minimum Length is 3"
              : ""
          }
          {...register("FirstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.LastName)}
          helperText={
            errors.LastName
              ? "Last Name is Required..! & Minimum Length is 3"
              : ""
          }
          {...register("LastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>
      <TextField
        error={Boolean(errors.Email)}
        helperText={errors.Email ? "Valid Email is Required..! " : ""}
        {...register("Email", {
          required: true,
          pattern: regEmail,
        })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.Contacts)}
        helperText={
          errors.Contacts ? "Valid Contact Number is Required..! " : ""
        }
        {...register("Contacts", {
          required: true,
          pattern: phoneRegExp,
        })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="First Address" variant="filled" />
      <TextField label="Second Address" variant="filled" />
      <TextField select label="Select" defaultValue="User" variant="filled">
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account Created Successfuly
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default ProfileForm;

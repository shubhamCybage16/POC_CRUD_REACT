import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@material-ui/core";
const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const paperStyle = { padding: "30px 20px", width: 700, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const gridStyle = { margin: "15px" };
  const textStyle = { margin: "10px" };
  const { name, username, email, phone, website } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (data) => {
    await axios.put(`http://localhost:3003/users/${id}`, data);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    console.log("in loadUser");
    console.log(result.data);
    setUser(result.data);
    console.log(user);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return !user.name ? (
    <CircularProgress />
  ) : (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle} data-testid="header">
            Edit User
          </h2>
        </Grid>
        <Grid align="center" style={gridStyle}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Enter name"
              variant="outlined"
              name="name"
              style={textStyle}
              fullWidth
              defaultValue={user.name}
              {...register("name", {
                required: "First Name is required",
                validate: "sdf",
              })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
            <TextField
              label="Enter username"
              variant="outlined"
              name="username"
              style={textStyle}
              defaultValue={user.username}
              fullWidth
              {...register("username", {
                required: "username is required with min length 4",
                minLength: 4,
                validate: "sdf",
              })}
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
            />
            <TextField
              label="Enter email"
              variant="outlined"
              //  type="email"
              style={textStyle}
              defaultValue={user.email}
              fullWidth
              name="email"
              {...register("email", {
                required: "email is required",
                pattern: /[A-Za-z]{3}/,
              })}
              // rules={{
              //   required: true,
              //   pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
              // }}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            {errors.email && errors.email.type === "pattern" && (
              <span>Max length exceeded</span>
            )}
            <TextField
              label="Enter pnone number"
              variant="outlined"
              style={textStyle}
              fullWidth
              defaultValue={user.phone}
              // onChange={(e) => onInputChange(e)}
              name="phone"
              {...register("phone", {
                required: "10 digit phone is required",
                validate: "sdf",
                minLength: 10,
                maxLength: 10,
              })}
              error={Boolean(errors.phone)}
              helperText={errors.phone?.message}
            />
            {/* {errors.phone && errors.phone.type === "maxLength" && (
              <span>Max length exceeded</span>
            )} */}
            <TextField
              label="Enter website Name"
              variant="outlined"
              style={textStyle}
              fullWidth
              defaultValue={user.website}
              // onChange={(e) => onInputChange(e)}
              name="website"
              {...register("website", {
                required: "website is required",
                validate: "sdf",
              })}
              error={Boolean(errors.website)}
              helperText={errors.website?.message}
            />
            <div className="formSubmitButton">
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={textStyle}
              >
                Submit
              </Button>
            </div>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default EditUser;

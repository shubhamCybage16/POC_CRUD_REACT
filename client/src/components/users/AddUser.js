import axios from "axios";
import { useHistory } from "react-router-dom";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

const AddUser = () => {
  let history = useHistory();

  const paperStyle = { padding: "30px 20px", width: 700, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const gridStyle = { margin: "15px" };
  const textStyle = { margin: "10px" };

  const onSubmit = async (data) => {
    console.log(data);
    await axios.post("http://localhost:3003/users", data);
    history.push("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle} data-testid="header">
            Add User
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
              type="email"
              style={textStyle}
              fullWidth
              name="email"
              {...register("email", {
                required: "email is required",
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <TextField
              label="Enter pnone number"
              variant="outlined"
              style={textStyle}
              fullWidth
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

export default AddUser;

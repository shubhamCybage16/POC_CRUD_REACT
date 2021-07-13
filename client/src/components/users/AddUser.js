import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
const AddUser = () => {
  let history = useHistory();
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
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle} data-testid="header">
            Add User
          </h2>
        </Grid>
        <Grid align="center" style={gridStyle}>
          <TextField
            label="Enter name"
            variant="outlined"
            required
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
            style={textStyle}
            fullWidth
          />
          <TextField
            label="Enter username"
            variant="outlined"
            required
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
            style={textStyle}
            fullWidth
          />
          <TextField
            label="Enter email"
            variant="outlined"
            required
            style={textStyle}
            fullWidth
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
          <TextField
            label="Enter pnone number"
            variant="outlined"
            required
            style={textStyle}
            fullWidth
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
          <TextField
            label="Enter website Name"
            variant="outlined"
            required
            style={textStyle}
            fullWidth
            name="website"
            value={website}
            onChange={(e) => onInputChange(e)}
          />
          <div className="formSubmitButton">
            <Button
              color="primary"
              //onSubmit={(e) => onSubmit(e)}
              onClick={(e) => onSubmit(e)}
              variant="contained"
              style={textStyle}
            >
              Submit
            </Button>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default AddUser;

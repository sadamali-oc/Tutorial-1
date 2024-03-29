import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";

const UserForm = (props) => {
  const [id, setId] = useState("0"); //react hooks(access life cycle of react)
  const [name, setName] = useState("");

  return (
    <Grid
      container
      spacing={4}
      sx={{
        backgroundColor: "White",
        marginBottom: "30px",
        display: "block",
        marginLeft: "0",
      }}
    >
      <Grid item xs={12}>
        <Typography component={"h1"} sx={{ color: "#30000" }}>
          User Form
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "black",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: "400px" }}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="name"
          sx={{
            color: "black",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: "400px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={20} sm={10} sx={{ display: "flex" }}>
        <Button
          sx={{
            margin: "auto",
            marginBottom: "20px",
            backgroundColor: "#03A9F4",
            marginLeft: "15px",
            marginTop: "20px",
            "&:hover": {
              opacity: "0.7",
              marginLeft: "15px",
            },
          }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};
export default UserForm;

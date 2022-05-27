import axios from "axios";
import React from "react";
import BasicTabs from "./components/Tabs";
import { Box, Grid, Paper, Typography } from "@mui/material";

const App = () => {
  const [users, setUsers] = React.useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get(
      "https://dynify-server.herokuapp.com/users"
    );
    setUsers(data);
  };

  React.useEffect(() => {
    fetchUsers();

    //data will be fetched in regular intervals
    const interval = setInterval(() => {
      fetchUsers();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <BasicTabs />
      <Typography variant="h5" ml={4}>
        List Of Users
      </Typography>
      <Grid container spacing={2} p={3}>
        {users?.map((user) => (
          <Grid item xs={12} sm={6} lg={4}>
            <Paper square elevation={4}>
              <Box p={2}>
                <Typography variant="body1">
                  {user?.firstName} {user?.lastName} ( {user?.age} )
                </Typography>
                <hr />
                <Typography variant="subtitle2">
                  {" "}
                  Email: {user?.email}
                </Typography>
                <Typography variant="subtitle2">
                  {" "}
                  Mobile: {user?.mobile}
                </Typography>
                <hr />
                <Typography variant="subtitle2">
                  {" "}
                  Business: {user?.businessName} ( {user?.gst} )
                </Typography>
                <Typography variant="subtitle2">{user?.address}</Typography>
                <hr />
                <Typography variant="subtitle2">
                  {" "}
                  Loan : {user?.amount} ( {user?.interest} %)
                </Typography>
                <Typography variant="subtitle2">
                  {" "}
                  Tenure: {user?.tenure} Months
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default App;

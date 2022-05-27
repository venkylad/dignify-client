import React from "react";
import { Button, Grid, TextField } from "@mui/material";

const Personal = ({ proceedNext, formik }) => {
  return (
    <div>
      <Grid container spacing={4} mt={1} mb={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="mobile"
            name="mobile"
            label="Mobile Number"
            type="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="age"
            name="age"
            label="Age"
            type="number"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
            required
          />
        </Grid>
      </Grid>

      <Button
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => proceedNext(1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Personal;

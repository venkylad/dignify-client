import React from "react";
import { Button, Grid, TextField } from "@mui/material";

const Loan = ({ formik, handleError }) => {
  return (
    <div>
      <Grid container spacing={4} mt={1} mb={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="amount"
            name="amount"
            label="Loan Amount"
            type="number"
            value={formik.values.amount}
            onChange={formik.handleChange}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="interest"
            name="interest"
            label="Loan Interest"
            type="number"
            value={formik.values.interest}
            onChange={formik.handleChange}
            error={formik.touched.interest && Boolean(formik.errors.interest)}
            helperText={formik.touched.interest && formik.errors.interest}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="tenure"
            name="tenure"
            label="Loan Tenure in months"
            type="number"
            value={formik.values.tenure}
            onChange={formik.handleChange}
            error={formik.touched.tenure && Boolean(formik.errors.tenure)}
            helperText={formik.touched.tenure && formik.errors.tenure}
            required
          />
        </Grid>
      </Grid>

      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        onClick={handleError}
      >
        Submit
      </Button>
    </div>
  );
};

export default Loan;

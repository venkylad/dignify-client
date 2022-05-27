import React from "react";
import { Button, Grid, TextField } from "@mui/material";

const Business = ({ proceedNext, formik }) => {
  return (
    <div>
      <Grid container spacing={4} mt={1} mb={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="businessName"
            name="businessName"
            label="Business Name"
            type="text"
            value={formik.values.businessName}
            onChange={formik.handleChange}
            error={
              formik.touched.businessName && Boolean(formik.errors.businessName)
            }
            helperText={
              formik.touched.businessName && formik.errors.businessName
            }
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="gst"
            name="gst"
            label="GST Number"
            type="text"
            value={formik.values.gst}
            onChange={formik.handleChange}
            error={formik.touched.gst && Boolean(formik.errors.gst)}
            helperText={formik.touched.gst && formik.errors.gst}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="address"
            name="address"
            label="Address"
            type="text"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="businessType"
            name="businessType"
            label="Business Type"
            type="text"
            value={formik.values.businessType}
            onChange={formik.handleChange}
            error={
              formik.touched.businessType && Boolean(formik.errors.businessType)
            }
            helperText={
              formik.touched.businessType && formik.errors.businessType
            }
          />
        </Grid>
      </Grid>

      <Button
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => proceedNext(2)}
      >
        Next
      </Button>
    </div>
  );
};

export default Business;

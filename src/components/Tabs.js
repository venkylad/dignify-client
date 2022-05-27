import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Alert, Badge, Paper } from "@mui/material";
import Personal from "./Forms/Personal";
import Business from "./Forms/Business";
import Loan from "./Forms/Loan";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "../utils";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, count, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [errors, setErrors] = React.useState([]);
  const [clickSubmit, setClickSubmit] = React.useState(false);
  const [forBadges, setForBadges] = React.useState({
    personal: 0,
    business: 0,
    loan: 0,
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      await axios
        .post("https://dynify-server.herokuapp.com/users", values)
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            resetForm();
            setClickSubmit(false);
            alert("Details Submitted");
          }
        })
        .catch((err) => alert(err.message));
    },
  });

  const proceedNext = (val) => setValue(val);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleError = () => {
    let obj = formik.errors;
    let errArr = Object.keys(obj).map(function (key) {
      return obj[key];
    });
    setErrors(errArr);
    setClickSubmit(true);
  };

  const personal = ["firstName", "lastName", "age", "email", "mobile"];
  const business = ["businessName", "gst", "address", "businessType"];
  const loan = ["amount", "interest", "tenure"];

  const countCommon = (first, second) => {
    const spreaded = [...first, ...second];
    let arr = spreaded.filter((el) => {
      return first.includes(el) && second.includes(el);
    });
    let uniqueChars = [...new Set(arr)];
    return uniqueChars.length;
  };

  React.useEffect(() => {
    if (clickSubmit) {
      let obj = formik.errors;
      let errArr = Object.keys(obj).map(function (key) {
        return obj[key];
      });
      setErrors(errArr);
      let errEle = Object.keys(obj);

      setForBadges({
        ...forBadges,
        personal: countCommon(errEle, personal),
        business: countCommon(errEle, business),
        loan: countCommon(errEle, loan),
      });
    }
  }, [formik.errors, clickSubmit]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          height: "60px",
          width: "100%",
        }}
        my={2}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Personal Details"
            {...a11yProps(0)}
            icon={
              errors.length > 0 &&
              forBadges?.personal > 0 && (
                <Badge badgeContent={forBadges?.personal}>
                  <ErrorOutlineIcon />
                </Badge>
              )
            }
          />
          <Tab
            label="Business Details"
            {...a11yProps(1)}
            icon={
              errors.length > 0 &&
              forBadges?.business > 0 && (
                <Badge badgeContent={forBadges?.business}>
                  <ErrorOutlineIcon />
                </Badge>
              )
            }
          />
          <Tab
            label="Loan Aplication Details"
            {...a11yProps(2)}
            icon={
              errors.length > 0 &&
              forBadges?.loan > 0 && (
                <Badge badgeContent={forBadges?.loan}>
                  <ErrorOutlineIcon />
                </Badge>
              )
            }
          />
        </Tabs>
      </Box>
      {errors?.map((err) => (
        <Box m={1}>
          <Alert variant="filled" severity="warning">
            {err}
          </Alert>
        </Box>
      ))}
      {clickSubmit && errors?.length === 0 && (
        <Box m={1}>
          <Alert variant="filled" severity="info">
            Click Submit to Proceed
          </Alert>
        </Box>
      )}
      <form onSubmit={formik.handleSubmit}>
        <TabPanel value={value} index={0}>
          <Paper elevation={3}>
            <Box p={4}>
              <Typography variant="h5">
                <AccountCircleOutlinedIcon fontSize="large" /> Personal Details
              </Typography>
              <Personal proceedNext={proceedNext} formik={formik} />
            </Box>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Paper elevation={3}>
            <Box p={4}>
              <Typography variant="h5">
                <StorefrontOutlinedIcon fontSize="large" /> Business Details
              </Typography>
              <Business proceedNext={proceedNext} formik={formik} />
            </Box>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Paper elevation={3}>
            <Box p={4}>
              <Typography variant="h5">
                <AccountBalanceOutlinedIcon fontSize="large" /> Loan Details
              </Typography>
              <Loan
                proceedNext={proceedNext}
                formik={formik}
                handleError={handleError}
              />
            </Box>
          </Paper>
        </TabPanel>
      </form>
    </Box>
  );
}

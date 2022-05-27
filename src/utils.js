import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "name is too sort")
    .max(30, "must be 15 character or less")
    .required("enter first name"),
  lastName: yup
    .string()
    .min(2, "name is too sort")
    .max(30, "must be 15 character or less")
    .required("enter last name"),
  mobile: yup
    .string()
    .min(10, "mobile number should be 10 digit")
    .max(10, "mobile number should be 10 digit")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("phone number is required"),
  email: yup.string().email("invalid email").required("email is required"),
  age: yup
    .number()
    .min(18, "Must be more than 18")
    .max(99, "HTF you still alive ?")
    .required("Age is required"),
  businessName: yup
    .string()
    .min(2, "name is too sort")
    .max(30, "must be 15 character or less")
    .required("enter business name"),
  gst: yup
    .string()
    .min(2, "name is too sort")
    .max(30, "must be 15 character or less")
    .required("enter GST Number"),
  address: yup.string(),
  businessType: yup.string(),
  amount: yup.number().required("Enter Loan Amount"),
  interest: yup.number().required("Enter Interest"),
  tenure: yup.number().required("Select Loan tenure"),
});

export const initialValues = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  age: 21,
  businessName: "",
  gst: "",
  address: "",
  businessType: "",
  amount: 0,
  interest: 0,
  tenure: 0,
};

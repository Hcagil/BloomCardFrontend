import * as yup from "yup";



export const PersonalSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  firstname: yup.string().min(2, 'Too Short!'),
  lastname: yup.string().required("Required"),
  phone: yup
    .number()
    .required("Required"),

});

export const CompanySchema = yup.object().shape({
  companyname: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  companyaddress: yup
    .string()


});

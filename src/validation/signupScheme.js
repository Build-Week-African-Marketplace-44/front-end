import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(4, "Name must be at least 4 chars long"),
  email: yup
    .string()
    .email("Must be valid email address")
    .required("Must include email address")
    .notOneOf(["waffle@syrup.com"], "That email is already taken"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 chars long"),
});
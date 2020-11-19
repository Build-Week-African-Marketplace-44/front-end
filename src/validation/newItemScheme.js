import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required("Name is required")
    .min(4, "Name must be at least 4 chars long"),
   
    price: yup
    .number()
    .required("Price is required")
    .min (0 , "Enter valid price"),

    category: yup
    .string()
    .required("Category is required"),

    location: yup
    .string()
    .required("Location is required"),

    description: yup
    .string(),
});
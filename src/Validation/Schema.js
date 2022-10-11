import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup.string()   
        .min(2, "name must be at least 2 characters")
        .required("Name is Required"),
    size: Yup.string()   
        .required("Size is Required"),
    instructions: Yup.string()   
        ,
        
  });
  
  export default formSchema;
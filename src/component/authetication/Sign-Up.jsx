
import {Field,Form,Formik} from "formik";
import {Button, IconButton} from "@mui/material";
import {Visibility,VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import {registerServiceProvider} from "../../ApiService";
import  signUp from "../../asserts/6310507.jpg"
import {Link} from "react-router-dom";

const initialValues = {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      serviceCategory:"",
      yearsOfExperience:"",
      description:""
  }
const SignUp = ()=>{


      const [showPassword, setShowPassword] = useState(false);
      const handleShowPassword =() => {
          setShowPassword(!showPassword)
      }

      const handleMouseDown = (event) =>{
         event.preventDefault()
      }
    const onSubmit = async (values,{resetForm}) => {
        try {
            const response = await registerServiceProvider(values);
            console.log('Registration successful:', response);
            alert("Registration successful")
            resetForm();


        } catch (error) {
            console.error('Error registering service provider:', error);

        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 md:p-10">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg max-w-6xl w-full p-8"> {/* Increased max width and added padding */}
                <div className="md:flex-none w-full md:w-1/2">
                    <img src={signUp} alt="Sign Up" className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-10 md:ml-10"> {/* Added margin-left for spacing */}
                    <h1 className="text-2xl text-blue-600 font-bold text-center mb-5">REGISTRATION</h1>
                    <Formik onSubmit={onSubmit} initialValues={initialValues}>
                        {({ values, handleChange, handleBlur }) => (
                            <Form>
                                <div className="mb-4">
                                    <Field
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter full name"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <Field
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Enter phone number"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <Field
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="Enter password"
                                        className="w-full p-2 border border-gray-300 rounded pr-10"
                                        required
                                    />
                                    <IconButton
                                        sx={{
                                            color: "gray",
                                            position: "absolute",
                                            right: "10px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            opacity: 0.7
                                        }}
                                        aria-label="toggle password visibility"
                                        onClick={handleShowPassword}
                                        onMouseDown={handleMouseDown}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </div>
                                <div className="mb-4">
                                    <Field
                                        as="select"
                                        id="serviceCategory"
                                        name="serviceCategory"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        required
                                    >
                                        <option value="">Select a role to register as</option>
                                        <option value="HAIRSTYLISTS">HAIRSTYLISTS</option>
                                        <option value="BARBERS">BARBERS</option>
                                        <option value="FASHION_DESIGNERS">FASHION_DESIGNERS</option>
                                        <option value="CLEANERS">CLEANERS</option>
                                        <option value="PLUMBERS">PLUMBERS</option>
                                    </Field>
                                </div>
                                <div className="mb-4">
                                    <Field
                                        type="text"
                                        id="yearsOfExperience"
                                        name="yearsOfExperience"
                                        placeholder="Enter your years of experience"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <Field
                                        as="textarea"
                                        id="description"
                                        name="description"
                                        placeholder="Brief description of yourself"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="flex justify-center mb-4">
                                    <Button variant="contained" type="submit" sx={{ backgroundColor: "blue", color: "white" }}>
                                        SIGN UP
                                    </Button>
                                </div>
                                <div className="text-center text-blue-600">
                                    If you already have an account, <Link to="/login" className="text-yellow-500 font-bold cursor-pointer">Log In</Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}
export default SignUp;

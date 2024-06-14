import signIn from "../../asserts/login.jpg";
import {Field, Form, Formik} from "formik";
import {Button, IconButton} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import ApiService from "../../ApiService";

const CustomerLogIn = ()=> {
    const initialValue = {
        email:"",
        password:""
    }

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const handleShowPassword =() => {
        setShowPassword(!showPassword)
    }

    const handleMouseDown = (event) =>{
        event.preventDefault()
    }

    const onSubmit = async (values,{resetForm}) => {
        try {
            const response = await ApiService.loginProvider(values);
            console.log('LogIn successful:', response);
            localStorage.setItem('customer', JSON.stringify(response.data));


            navigate("/customer-dashboard");
            resetForm();

        } catch (error) {
            console.error('Error logging in customer:', error);
            alert('CustomerLogIn failed. Please check your credentials and try again.');
        }


    }
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100">
            <div className="md:flex bg-white shadow-lg rounded-lg overflow-hidden">

                <div className="md:w-1/2">
                    <img
                        src={signIn}
                        alt="Sign In"
                        className="w-full h-full object-cover"/>
                </div>
                <div className="w-full md:w-1/2 p-10">
                    <h1 className="text-2xl text-blue-600 font-bold text-center mb-5 mt-20">LOGIN</h1>
                    <Formik onSubmit={onSubmit} initialValues={initialValue}>
                        <Form>
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
                            <div className="mb-4 relative">
                                <Field
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Enter password"
                                    className="w-full p-2 border border-gray-300 rounded "
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
                                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </div>
                            <div className="flex justify-center mb-4">
                                <Button variant="contained" type="submit"
                                        sx={{backgroundColor: "blue", color: "white"}}>
                                    LOGIN
                                </Button>
                            </div>
                            <div className="text-center text-blue-600">
                                If you don't have an account, <Link to="/signup"
                                                                    className="text-yellow-500 font-bold cursor-pointer">Sign
                                up</Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default CustomerLogIn;
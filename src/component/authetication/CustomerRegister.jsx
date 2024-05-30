// import { useState } from "react";
// import { Field, Form, Formik } from "formik";
// import { Button, IconButton } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { Link, useNavigate } from "react-router-dom";
// import signUp from "../../asserts/signUp.jpg";
// import { register } from "../../ApiService";
//
// const CustomerRegister = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();
//
//     const handleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };
//
//     const handleMouseDown = (event) => {
//         event.preventDefault();
//     };
//
//     const onSubmit = async (values, { resetForm }) => {
//         try {
//             const registerResponse = await register(values);
//             console.log('Customer Registered successfully:', registerResponse);
//
//             navigate('/customer-dashboard');
//         } catch (error) {
//             console.error('Error registering customer:', error);
//             alert("Error during registration. Please try again.");
//             resetForm();
//         }
//     };
//
//     const initialValues = {
//         fullName: "",
//         email: "",
//         phoneNumber: "",
//         password: "",
//         address: "",
//         preferredDate: "",
//     };
//
//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 md:p-10">
//             <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg max-w-6xl w-full p-10">
//                 <div className="md:flex-none w-full md:w-1/2">
//                     <img src={signUp} alt="Sign Up" className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
//                 </div>
//                 <div className="w-full md:w-1/2 p-6 md:p-10">
//                     <h1 className="text-2xl text-blue-600 font-bold text-center mb-5">REGISTRATION</h1>
//                     <Formik onSubmit={onSubmit} initialValues={initialValues}>
//                         {({ values, handleChange, handleBlur }) => (
//                             <Form>
//                                 <div className="mb-4">
//                                     <Field
//                                         type="text"
//                                         id="fullName"
//                                         name="fullName"
//                                         placeholder="Enter full name"
//                                         className="w-full p-1 border border-gray-300 rounded"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <Field
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         placeholder="Enter email"
//                                         className="w-full p-1 border border-gray-300 rounded"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <Field
//                                         type="text"
//                                         id="phoneNumber"
//                                         name="phoneNumber"
//                                         placeholder="Enter phone number"
//                                         className="w-full p-1 border border-gray-300 rounded"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4 relative">
//                                     <Field
//                                         type={showPassword ? "text" : "password"}
//                                         id="password"
//                                         name="password"
//                                         placeholder="Enter password"
//                                         className="w-full p-1 border border-gray-300 rounded"
//                                         required
//                                     />
//                                     <IconButton
//                                         sx={{
//                                             color: "gray",
//                                             position: "absolute",
//                                             right: "10px",
//                                             top: "50%",
//                                             transform: "translateY(-50%)",
//                                             opacity: 0.7
//                                         }}
//                                         aria-label="toggle password visibility"
//                                         onClick={handleShowPassword}
//                                         onMouseDown={handleMouseDown}
//                                     >
//                                         {showPassword ? <Visibility /> : <VisibilityOff />}
//                                     </IconButton>
//                                 </div>
//                                 <div className="mb-4">
//                                     <Field
//                                         as="textarea"
//                                         id="address"
//                                         name="address"
//                                         placeholder="Enter your address"
//                                         className="w-full p-1 border border-gray-300 rounded"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <Field
//                                         type="date"
//                                         id="preferredDate"
//                                         name="preferredDate"
//                                         placeholder="Enter preferred date"
//                                         className="w-full p-1 border border-gray-300 rounded"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="flex justify-center mb-4">
//                                     <Button variant="contained" type="submit" sx={{ backgroundColor: "blue", color: "white" }}>
//                                         SIGN UP
//                                     </Button>
//                                 </div>
//                                 <div className="text-center text-blue-600">
//                                     If you already have an account, <Link to="/login" className="text-yellow-500 font-bold cursor-pointer">Log In</Link>
//                                 </div>
//                             </Form>
//                         )}
//                     </Formik>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default CustomerRegister;
//



import signUp from "../../asserts/signUp.jpg";
import { Field, Form, Formik } from "formik";
import { Button, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../ApiService";
import {bookService} from "../../ApiService";

const CustomerRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Use useNavigate hook

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDown = (event) => {
        event.preventDefault();
    };

    const onSubmit = async (values, { resetForm }) => {
        try {
            const registerResponse = await register(values);
            console.log('Customer Registered successfully:', registerResponse);


            const bookingDetails = {
                customerId: registerResponse.id,
                customerName: values.fullName,
                customerAddress: values.address,
                preferredDate: values.preferredDate,
            };

            const bookingResponse = await bookService(bookingDetails);
            console.log('Service booked successfully:', bookingResponse);

            navigate('/customer-dashboard');
        } catch (error) {
            console.error('Error registering customer or booking service:', error);
            alert("Error during registration or booking service. Please try again.");
            resetForm();
        }
    };


    const initialValues = {
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        address: "",
        preferredDate: "",
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 md:p-10">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg max-w-6xl w-full p-10"> {/* Increased max-width and padding */}
                <div className="md:flex-none w-full md:w-1/2">
                    <img src={signUp} alt="Sign Up" className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-10">
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
                                        className="w-full p-1 border border-gray-300 rounded" // Reduced padding
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email"
                                        className="w-full p-1 border border-gray-300 rounded" // Reduced padding
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <Field
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Enter phone number"
                                        className="w-full p-1 border border-gray-300 rounded" // Reduced padding
                                        required
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <Field
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="Enter password"
                                        className="w-full p-1 border border-gray-300 rounded" // Reduced padding
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
                                <div className="mb-4">
                                    <Field
                                        as="textarea"
                                        id="address"
                                        name="address"
                                        placeholder="Enter your address"
                                        className="w-full p-1 border border-gray-300 rounded" // Reduced padding
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <Field
                                        type="date"
                                        id="preferredDate"
                                        name="preferredDate"
                                        placeholder="Enter preferred date"
                                        className="w-full p-1 border border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="flex justify-center mb-4">
                                    <Button variant="contained" type="submit"
                                            sx={{backgroundColor: "blue", color: "white"}}>
                                        SIGN UP
                                    </Button>
                                </div>
                                <div className="text-center text-blue-600">
                                    If you already have an account, <Link to="/login"
                                                                          className="text-yellow-500 font-bold cursor-pointer">Log
                                    In</Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default CustomerRegister;

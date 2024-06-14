import Layout from "../layout/Layout";
import SingleLayout from "../layout/SingleLayout";
import SignUp from "../component/authetication/Sign-Up";
import ServiceProviderLogIn from "../component/authetication/ServiceProviderLogIn";
import RegistrationPage from "../component/authetication/RegistrationPage";
import CustomerRegister from "../component/authetication/CustomerRegister";
import Hero from "../features/Hero";
import CustomerDashBoard from "../features/CustomerDashBoard";
import BookService from "../features/BookService";
import ServiceProviderDashBoard from "../features/ServiceProviderDashBoard";
import Confirmation from "../features/Confirmation"
import CustomerLogIn from "../component/authetication/CustomerLogIn";

export const Routes = [
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path: "/",
                element: <Hero/>
            },

        ]
    },


    {
        path:"/",
        element:<SingleLayout/>,
        children:[
            {
                path:"/sign-up",
                element:<SignUp/>

            },
            {
                path:"/landing-page",
                element:<RegistrationPage />

            },
            {
                path:"/customerRegister",
                element:<CustomerRegister />

            },

            {
                path: "/login",
                element: <ServiceProviderLogIn/>
            },

            {
                path: "/login",
                element: <CustomerLogIn/>
            },


            {
                path: "/customer-dashboard",
                element: <CustomerDashBoard />
            },
            {
                path: "/serviceProvider-dashboard",
                element: <ServiceProviderDashBoard />
            },

            {
                path: "/book-service",
                element: <BookService />
            },
            {
                path: "/confirmation",
                element: <Confirmation/>
            }

        ]

    }

    ]
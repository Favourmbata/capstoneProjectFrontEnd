import Layout from "../layout/Layout";
import SingleLayout from "../layout/SingleLayout";
import SignUp from "../component/authetication/Sign-Up";
import Login from "../component/authetication/Login";
import RegistrationPage from "../component/authetication/RegistrationPage";
import CustomerRegister from "../component/authetication/CustomerRegister";
import Hero from "../features/Hero";
import CustomerDashBoard from "../features/CustomerDashBoard";
import BookService from "../features/BookService";
import ServiceProviderDashBoard from "../features/ServiceProviderDashBoard";

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
                element: <Login/>
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
            }
        ]

    }

    ]
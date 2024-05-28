import Layout from "../layout/Layout";
import SingleLayout from "../layout/SingleLayout";
import SignUp from "../component/authetication/Sign-Up";
import Login from "../component/authetication/Login";
import RegistrationPage from "../component/authetication/RegistrationPage";
import CustomerRegister from "../component/authetication/CustomerRegister";
import Hero from "../features/Hero";

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
            }

        ]

    }

    ]
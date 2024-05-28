 // import chain from "../../../asserts/link.png"

import React from 'react';
import { Link } from 'react-router-dom';
import FilledButton from '../filledButton/FilledButton';
import OutlinedButton from "../outlinedButton/OutlinedButton";
import {useNavigate} from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div>
        <div className="shadow-md w-full">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-blue-500">
                    {/*<img src={chain} alt={""}/>*/}
                    <h2>Connects</h2>
                </div>
                <nav className={"md:flex items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in "}>
                    <Link to="/home" className="block md:inline-block mt-2 md:mt-0 md:ml-8 text-gray-800 hover:text-gray-400 duration-500 font-bold text-xl">Home</Link>
                    <Link to="/about" className="block md:inline-block mt-2 md:mt-0 md:ml-8 text-gray-800 hover:text-gray-400 duration-500 font-bold text-xl">About</Link>
                    <Link to="/about" className="block md:inline-block mt-2 md:mt-0 md:ml-8 text-gray-800 hover:text-gray-400 duration-500 font-bold text-xl">Services</Link>
                </nav>
                <div className={"flex items-center space-x-4"}>
                <div onClick={()=> navigate("/login")}>
                    <OutlinedButton>Login</OutlinedButton>
                </div>


                <div onClick={()=>navigate("/landing-page")}>
                    <FilledButton>Sign Up</FilledButton>
                </div>
                </div>
            </div>

        </div>

        </div>
    );
}

export default Navbar;

import {Link} from "react-router-dom";
import React from "react";

const CustomerDashBoard = ()=>{
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Customer Dashboard</h1>
                <div className="space-x-4">
                    <Link
                        to="/update-profile"
                        className="text-gray-800 hover:text-gray-400 duration-500 font-bold text-xl">Update Profile
                    </Link>

                    <Link
                        to="/book-service"
                        className="text-gray-800 hover:text-gray-400 duration-500 font-bold text-xl">Book Service</Link>


                </div>
            </nav>
            <main className="mt-8">
                <div className="container mx-auto">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to your dashboard!</h2>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default CustomerDashBoard;
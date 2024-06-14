import {Link, useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import naira from "../asserts/icons8-naira-48.png";
import ApiService from "../ApiService";
const ServiceProviderDashBoard = () => {
    const navigate = useNavigate();
    const {state} = useLocation();

    const [providers, setProviders] = useState([]);

    const [fetchingProviders, setFetchingProviders] = useState(true);

    useEffect(() => {
     setFetchingProviders(true);
        ApiService.getProvider(state.serviceCategory, state.location)
            .then(data => {
                console.log("data", data)
                setProviders(data.serviceProviders);
                setFetchingProviders(false)

            })
            .catch(err => {
                setFetchingProviders(false)
            })

    }, [fetchingProviders, state.serviceCategory, state.location]);

    console.log("providers", providers)
    const handleProfileClick = async (profile) => {
        const bookingDetails = {
            customerId: 1,
            customerName: "",
            customerAddress: "",
            preferredDate: "",
            serviceProvider: profile.name,
            servicePrice: profile.price,
        };

        try {
            const response = await ApiService.bookService(bookingDetails);
            console.log('Service booked successfully:', response);
            alert("Service booked successfully!");
            navigate('/confirmation');
        } catch (error) {
            console.error('Error booking service:', error);
            alert("Error during booking. Please try again.");
        }
    };

    return (
        <div>
            <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">ServiceProvider Dashboard</h1>
                <div className="space-x-4">
                    <Link to="/update-profile"
                          className="text-gray-800 hover:text-gray-400 duration-500 font-bold text-xl">
                        Update Profile
                    </Link>
                    <Link to="/book-service"
                          className="text-gray-800 hover:text-gray-400 duration-500 font-bold text-xl">
                        Book Service
                    </Link>
                </div>
            </nav>

            <div className="p-8">
                {
                    fetchingProviders ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {Array.isArray(providers) && providers.map((profile, index)=>(
                                <div key={index} className="bg-white shadow-md rounded-md p-4 cursor-pointer"
                                     onClick={() => handleProfileClick(profile)}>
                                    <img src={profile.image} alt={profile.fullName}
                                         className="w-full h-48 object-cover rounded-t-md"/>
                                    <h2 className="mt-4 font-bold">{profile.fullName}</h2>
                                    <span className="flex items-center"><img src={naira} alt="Naira"
                                                                             className="w-5 h-5"/>{profile.price}</span>
                                    <div className="mt-2">
                                        <h4>{profile.description}</h4>
                                        <h2>{profile.location}</h2>
                                        <h4>{profile.phone}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
}
export default ServiceProviderDashBoard;

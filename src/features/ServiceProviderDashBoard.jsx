
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import dread from "../asserts/Dreadlock Styles 2017 For Short.jpg";
import image1 from "../asserts/7ff8dcac-f47e-4586-ae9b-16f547928dc5.jpg";
import naira from "../asserts/icons8-naira-48.png";
import image2 from "../asserts/download.jpg";
import image3 from "../asserts/Premium Photo _ Happiness .jpg";
import image4 from "../asserts/barber1.png";
import image5 from "../asserts/barber2.png";
import image6 from "../asserts/barber4.png";
import image7 from "../asserts/Screenshot 2024-05-29 194008.png";
import image8 from "../asserts/klh.jpg";
import image9 from "../asserts/designer2.jpg";
import image10 from "../asserts/download (4).jpg";
 import { bookService } from "../ApiService"; // Assuming you have this function implemented

const ServiceProviderDashBoard = () => {
    const navigate = useNavigate();

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
            // const response = await bookService(bookingDetails);
            // console.log('Service booked successfully:', response);
            alert("Service booked successfully!");
            navigate('/confirmation');
        } catch (error) {
            console.error('Error booking service:', error);
            alert("Error during booking. Please try again.");
        }
    };

    const profiles = [
        { name: "Balikis John", price: 5000, image: dread, description: "2 Years experience in barbing", location: "Bariga", phone: "09012533093" },
        { name: "Pelumi Adams", price: 6000, image: image1, description: "Professional Hairdresser", location: "Agboyi Ketu", phone: "" },
        { name: "Mercy Eke", price: 6000, image: image2, description: "Professional Hairdresser", location: "Isolo", phone: "" },
        { name: "Glory Bassey", price: 2000, image: image3, description: "Professional Hairdresser", location: "Orile Agege", phone: "" },
        { name: "Tony Hanson", price: 3000, image: image4, description: "Professional Barber", location: "Ejigbo", phone: "" },
        { name: "Tobi Umara", price: 2000, image: image5, description: "Professional Barber", location: "Ikosi Isheri", phone: "" },
        { name: "Golden Elliot", price: 3000, image: image6, description: "Professional Barber", location: "Ojodu", phone: "" },
        { name: "Tolu Peter", price: 3000, image: image7, description: "Professional Barber", location: "Ojokoro", phone: "" },
        { name: "Benson Peter", price: 9000, image: image9, description: "Professional Designer", location: "Egbe Idimu", phone: "" },
        { name: "Benson Peter", price: 7000, image: image8, description: "Professional Designer", location: "Mosan Okunola", phone: "" },
        { name: "Promise Ugo", price: 9000, image: image10, description: "Professional Designer", location: "Onigbongbo", phone: "" },
    ];

    return (
        <div>
            <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">ServiceProvider Dashboard</h1>
                <div className="space-x-4">
                    <Link to="/update-profile" className="text-gray-800 hover:text-gray-400 duration-500 font-bold text-xl">
                        Update Profile
                    </Link>
                    <Link to="/book-service" className="text-gray-800 hover:text-gray-400 duration-500 font-bold text-xl">
                        Book Service
                    </Link>
                </div>
            </nav>

            <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {profiles.map((profile, index) => (
                        <div key={index} className="bg-white shadow-md rounded-md p-4 cursor-pointer" onClick={() => handleProfileClick(profile)}>
                            <img src={profile.image} alt={profile.name} className="w-full h-48 object-cover rounded-t-md" />
                            <h2 className="mt-4 font-bold">{profile.name}</h2>
                            <span className="flex items-center"><img src={naira} alt="Naira" className="w-5 h-5" />{profile.price}</span>
                            <div className="mt-2">
                                <h4>{profile.description}</h4>
                                <h2>{profile.location}</h2>
                                <h4>{profile.phone}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ServiceProviderDashBoard;

import {Link} from "react-router-dom";
import React from "react";
import dread from "../asserts/Dreadlock Styles 2017 For Short.jpg"
import image1 from "../asserts/7ff8dcac-f47e-4586-ae9b-16f547928dc5.jpg"
import naira from "../asserts/icons8-naira-48.png"
import image2 from "../asserts/download.jpg"
import image3 from "../asserts/Premium Photo _ Happiness .jpg"
import image4 from "../asserts/barber1.png"
import image5 from "../asserts/barber2.png"
import image6 from "../asserts/barber4.png"
import image7 from "../asserts/Screenshot 2024-05-29 194008.png"
import image8 from "../asserts/klh.jpg"
import image9 from "../asserts/designer2.jpg"
import image10 from "../asserts/download (4).jpg"

const ServiceProviderDashBoard = ()=> {
    return(
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
                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src={dread} alt="Dreadlock Styles" className="w-full h-48 object-cover rounded-t-md" />
                        <h2 className="mt-4 font-bold">Balikis John</h2>
                        <span className="flex items-center"><img src={naira} alt="Naira" className="w-5 h-5" />5000</span>
                        <div className="mt-2">
                            <h4>2 Years experience in barbing</h4>
                            <h2>Bariga</h2>
                            <h4>09012533093</h4>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src={image1} alt="Hairdresser" className="w-full h-48 object-cover rounded-t-md" />
                        <h2 className="mt-4 font-bold">Pelumi Adams</h2>
                        <h3>Professional Hairdresser</h3>
                        <h2>Agboyi Ketu  </h2>
                        <span className="flex items-center"><img src={naira} alt="Naira" className="w-5 h-5" />6000</span>
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src={image2} alt="Hairdresser" className="w-full h-48 object-cover rounded-t-md" />
                        <h2 className="mt-4 font-bold">Mercy Eke</h2>
                        <h3>Professional Hairdresser</h3>
                        <h2>isolo   </h2>
                        <span className="flex items-center"><img src={naira} alt="Naira" className="w-5 h-5" />6000</span>
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src={image3} alt="Hairdresser" className="w-full h-48 object-cover rounded-t-md" />
                        <h2 className="mt-4 font-bold">Glory Bassey</h2>
                        <h3>Professional Hairdresser</h3>
                        <h2>Orile Agege         </h2>
                        <span className="flex items-center"><img src={naira} alt="Naira" className="w-5 h-5" />2000</span>
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src={image4} alt="Barber" className="w-full h-48 object-cover rounded-t-md" />
                        <h2 className="mt-4 font-bold">Tony Hanson</h2>
                        <h3>Professional Barber</h3>
                        <h2>Ejigbo </h2>
                        <span className="flex items-center"><img src={naira} alt="Naira" className="w-5 h-5" />3000</span>
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src={image5} alt="Barber" className="w-full h-48 object-cover rounded-t-md" />
                        <h2 className="mt-4 font-bold">Tobi Umara</h2>
                        <h3>Professional Barber</h3>
                        <h2>Ikosi Isheri </h2>
                        <span className="flex items-center"><img src={naira} alt="Naira" className="w-5 h-5" /> 2000</span>
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src={image6} alt="Barber" className="w-full h-48 object-cover rounded-t-md" />
                        <h2 className="mt-4 font-bold"> Golden Elliot  </h2>
                        <h3>Professional Barber</h3>
                        <h2>Ojodu </h2>
                        <span className="flex items-center"><img src={naira} alt="Naira" className="w-5 h-5" />3000</span>
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src={image7} alt="Barber" className="w-full h-48 object-cover rounded-t-md" />
                        <h2 className="mt-4 font-bold">Tolu Peter</h2>
                        <h3>Professional Barber</h3>
                        <h2> Ojokoro </h2>
                        <span className="flex items-center"><img src={naira} alt="Naira" className="w-5 h-5" />3000</span>
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src={image9} alt="Designer" className="w-full h-48 object-cover rounded-t-md" />
                        <h2 className="mt-4 font-bold">Benson Peter</h2>
                        <h3>Professional Designer</h3>
                        <h2>Egbe Idimu </h2>
                        <span className="flex items-center"><img src={naira} alt="Naira" className="w-5 h-5" />9000</span>
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src={image8} alt="Designer" className="w-full h-48 object-cover rounded-t-md" />
                        <h2 className="mt-4 font-bold">Benson Peter</h2>
                        <h3>Professional Designer</h3>
                        <h2>Mosan Okunola </h2>
                        <span className="flex items-center"><img src={naira} alt="Naira" className="w-5 h-5" />   7000</span>
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src={image10} alt="Designer" className="w-full h-48 object-cover rounded-t-md" />
                        <h2 className="mt-4 font-bold">Promise Ugo</h2>
                        <h3>Professional Designer</h3>
                        <h2>Onigbongbo </h2>
                        <span className="flex items-center"><img src={naira} alt="Naira" className="w-5 h-5" />9000</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ServiceProviderDashBoard;
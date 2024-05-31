


import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookService = () => {
    const [serviceCategory, setServiceCategory] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();


    const isRegistered = true; // Replace this with your actual check

    const handleClear = () => {
        setServiceCategory("");
        setLocation("");
    };

    const handleBookNow = () => {
        if (!isRegistered) {
            alert("You need to register before booking a service.");
            navigate("/register");
            return;
        }

        if (!serviceCategory || !location) {
            alert("Please select a service category and location.");
            return;
        }

        navigate("/serviceProvider-dashboard", { state: { serviceCategory, location } });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-center mb-4">
                <button
                    className="bg-black text-white py-2 px-4 w-1/3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg lg:max-w-xl">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Book a Service</h2>

                <div className="mb-4 flex justify-center">
                    <div className="w-full max-w-xs">
                        <select
                            id="serviceCategory"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            value={serviceCategory}
                            onChange={(e) => setServiceCategory(e.target.value)}
                        >
                            <option value="">Select a category</option>
                            <option value="HAIRSTYLISTS">HAIRSTYLISTS</option>
                            <option value="BARBERS">BARBERS</option>
                            <option value="FASHION_DESIGNERS">FASHION DESIGNERS</option>
                            <option value="CLEANERS">CLEANERS</option>
                            <option value="PLUMBERS">PLUMBERS</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4 flex justify-center">
                    <div className="w-full max-w-xs">
                        <select
                            id="location"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Select a location</option>
                            <option value="Ikeja">Ikeja</option>
                            <option value="Yaba">Yaba</option>
                            <option value="Surulere">Surulere</option>
                            <option value="Victoria Island">Victoria Island</option>
                            <option value="Lekki">Lekki</option>
                            <option value="Ikorodu">Ikorodu</option>
                            <option value="Epe">Epe</option>
                            <option value="Agege">Agege</option>
                            <option value="Badagry">Badagry</option>
                            <option value="Ikoyi">Ikoyi</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 text-white py-3 px-6 w-full max-w-xs rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={handleBookNow}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookService;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
//
// const BookService = () => {
//     const [serviceCategory, setServiceCategory] = useState("");
//     const [location, setLocation] = useState("");
//     const navigate = useNavigate();
//
//     const handleClear = () => {
//         setServiceCategory("");
//         setLocation("");
//     };
//
//     const handleBookNow = () => {
//         navigate("/serviceProvider-dashboard", { state: { serviceCategory, location } });
//     };
//
//     return (
//         <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center">
//             <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-center mb-4">
//                 <button
//                     className="bg-black text-white py-2 px-4 w-1/3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//                     onClick={handleClear}
//                 >
//                     Clear
//                 </button>
//             </div>
//             <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg lg:max-w-xl">
//                 <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Book a Service</h2>
//
//                 <div className="mb-4 flex justify-center">
//                     <div className="w-full max-w-xs">
//                         <select
//                             id="serviceCategory"
//                             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                             value={serviceCategory}
//                             onChange={(e) => setServiceCategory(e.target.value)}
//                         >
//                             <option value="">Select a category</option>
//                             <option value="HAIRSTYLISTS">HAIRSTYLISTS</option>
//                             <option value="BARBERS">BARBERS</option>
//                             <option value="FASHION_DESIGNERS">FASHION DESIGNERS</option>
//                             <option value="CLEANERS">CLEANERS</option>
//                             <option value="PLUMBERS">PLUMBERS</option>
//                         </select>
//                     </div>
//                 </div>
//
//                 <div className="mb-4 flex justify-center">
//                     <div className="w-full max-w-xs">
//                         <select
//                             id="location"
//                             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                             value={location}
//                             onChange={(e) => setLocation(e.target.value)}
//                         >
//                             <option value="">Select a location</option>
//                             <option value="Ikeja">Ikeja</option>
//                             <option value="Yaba">Yaba</option>
//                             <option value="Surulere">Surulere</option>
//                             <option value="Victoria Island">Victoria Island</option>
//                             <option value="Lekki">Lekki</option>
//                             <option value="Ikorodu">Ikorodu</option>
//                             <option value="Epe">Epe</option>
//                             <option value="Agege">Agege</option>
//                             <option value="Badagry">Badagry</option>
//                             <option value="Ikoyi">Ikoyi</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="flex justify-center">
//                     <button
//                         className="bg-blue-500 text-white py-3 px-6 w-full max-w-xs rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                         onClick={handleBookNow}
//                     >
//                         Book Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default BookService;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import {useState} from "react";
// //
// // const BookService = ()=> {
// //     const [serviceCategory, setServiceCategory] = useState("");
// //     const [location, setLocation] = useState("");
// //
// //     const handleClear = () => {
// //         setServiceCategory("");
// //         setLocation("");
// //     };
// //
// //     return (
// //         <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center">
// //             <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-center mb-4">
// //                 <button
// //                     className="bg-black text-white py-2 px-4 w-1/3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// //                     onClick={handleClear}
// //                 >
// //                     Clear
// //                 </button>
// //             </div>
// //             <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg lg:max-w-xl">
// //                 <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Book a Service</h2>
// //
// //
// //                 <div className="mb-4 flex justify-center">
// //                     <div className="w-full max-w-xs">
// //                         <select
// //                             id="serviceCategory"
// //                             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
// //                             value={serviceCategory}
// //                             onChange={(e) => setServiceCategory(e.target.value)}
// //                         >
// //                             <option value="">Select a category</option>
// //                             <option value="HAIRSTYLISTS">HAIRSTYLISTS</option>
// //                             <option value="BARBERS">BARBERS</option>
// //                             <option value="FASHION_DESIGNERS">FASHION DESIGNERS</option>
// //                             <option value="CLEANERS">CLEANERS</option>
// //                             <option value="PLUMBERS">PLUMBERS</option>
// //                         </select>
// //                     </div>
// //                 </div>
// //
// //
// //                 <div className="mb-4 flex justify-center">
// //                     <div className="w-full max-w-xs">
// //
// //                         <select
// //                             id="location"
// //                             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
// //                             value={location}
// //                             onChange={(e) => setLocation(e.target.value)}
// //                         >
// //                             <option value="">Select a location</option>
// //                             <option value="Ikeja">Ikeja</option>
// //                             <option value="Yaba">Yaba</option>
// //                             <option value="Surulere">Surulere</option>
// //                             <option value="Victoria Island">Victoria Island</option>
// //                             <option value="Lekki">Lekki</option>
// //                             <option value="Ikorodu">Ikorodu</option>
// //                             <option value="Epe">Epe</option>
// //                             <option value="Agege">Agege</option>
// //                             <option value="Badagry">Badagry</option>
// //                             <option value="Ikoyi">Ikoyi</option>
// //                         </select>
// //                     </div>
// //                 </div>
// //                 <div className="flex justify-center">
// //                     <button
// //                         className="bg-blue-500 text-white py-3 px-6 w-full max-w-xs rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// //                     >
// //                         Book Now
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }
// // export default BookService;
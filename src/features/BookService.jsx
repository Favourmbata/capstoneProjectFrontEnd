//
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ApiService from "../ApiService";
//
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
//     const handleBookNow = async () => {
//         // const customer = JSON.parse(localStorage.getItem('customer'));
//         //
//         // if (!customer) {
//         //     alert("You need to register before booking a service.");
//         //     navigate("/register");
//         //     return;
//         // }
//
//         if (!serviceCategory || !location) {
//             alert("Please select a service category and location.");
//             return;
//         }
//
//     //     const userData = {
//     //         serviceCategory,
//     //         location,
//     //         receiverRequestList: [
//     //             { email: customer.email, name: customer.fullName }
//     //         ]
//     //     };
//     //
//     //     try {
//     //         const response = await ApiService.bookService(userData);
//     //         if (response) {
//     //             alert("Booking successful and notification sent.");
//     //             navigate("/serviceProvider-dashboard", { state: { serviceCategory, location } });
//     //         } else {
//     //             alert("Failed to book service.");
//     //         }
//     //     } catch (error) {
//     //         console.error("Error booking service:", error);
//     //         alert("There was an error booking the service.");
//     //     }
//     // };
//         try {
//             const response = await ApiService.bookService();
//             if (response) {
//                 alert("Booking successful and notification sent.");
//                 navigate("/serviceProvider-dashboard", { state: { serviceCategory, location } });
//             } else {
//                 alert("Failed to book service.");
//             }
//         } catch (error) {
//             console.error("Error booking service:", error);
//             alert("There was an error booking the service.");
//         }
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
// };
//
// export default BookService;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ApiService from "../ApiService";
const BookService = () => {
    const [serviceCategory, setServiceCategory] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();


    const isRegistered = true;

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
                            onChange={(e) => setLocation(e.target.value)}>
                            <option value="">Select a location</option>
                            <option value="AGBADO_OKE_ODO,">AGBADO_OKE_ODO,</option>
                            <option value="AGBOYI_KETU">AGBOYI_KETU</option>
                            <option value="AYOBO_IPAJA">AYOBO_IPAJA</option>
                            <option value="BARIGA">BARIGA</option>
                            <option value=" EGBE_IDIMU"> EGBE_IDIMU</option>
                            <option value=" EJIGBO"> EJIGBO</option>
                            <option value="IGANDO_IKOTUN">IGANDO_IKOTUN</option>
                            <option value="IKOSI_ISHERI">IKOSI_ISHERI</option>
                            <option value=" ISOLO"> ISOLO</option>
                            <option value="MOSAN_OKUNOLA">MOSAN_OKUNOLA</option>
                            <option value="ODI_OLOWO_OJUWOYE">ODI_OLOWO_OJUWOYE</option>
                            <option value="OJODU">OJODU</option>
                            <option value=" OJOKORO"> OJOKORO</option>
                            <option value=" ONIGBONGBO"> ONIGBONGBO</option>
                            <option value=" ORILE_AGEGE">ORILE_AGEGE</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 text-white py-3 px-6 w-full max-w-xs rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={handleBookNow}>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};
export default BookService;
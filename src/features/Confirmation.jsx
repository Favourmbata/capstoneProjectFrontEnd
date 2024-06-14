import {useLocation} from "react-router-dom";

const Confirmation = ()=>{
    const location = useLocation();
    const { bookStatus } = location.state || {};

    return (
        <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg lg:max-w-xl">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Booking Status</h2>
                {bookStatus ? (
                    <p className="text-center text-xl">{bookStatus}</p>
                ) : (
                    <p className="text-center text-xl">Accepted</p>
                )}
            </div>
        </div>
    );
}
export default Confirmation;
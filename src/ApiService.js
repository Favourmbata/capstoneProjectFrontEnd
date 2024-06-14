import axios from "axios";


// const apiClient = axios.create({
//       providerBaseURL: 'http://localhost:8080/api/v1/ServiceFusion',
//       customerBaseURL:'http://localhost:8080/api/v1/customer/',
//     // adminBaseURL:'http://localhost:8080/api/v1/admin/',
//     headers: {
//         'Content-Type': 'application/json',
//
//     },
// });
//
//
// export const registerServiceProvider = async (data) => {
//     try {
//         const response = await apiClient.post('/registerServiceProvider', data);
//         return response.data;
//     } catch (error) {
//         console.log(error)
//         console.error('There was an error registering a service provider', error);
//         throw error;
//     }
// };
//
// export const loginServiceProvider = async (data) => {
//     try {
//         const response = await axios.post('/login', data);
//         return response.data;
//     } catch (error) {
//         console.error('There was an error logging in the service provider!', error);
//         throw error;
//     }
// };
//
// export const register = async (data) => {
//     try {
//         const response = await apiClient.post('http://localhost:8080/api/v1/customer/register', data);
//         return response.data;
//     } catch (error) {
//         console.error('There was an error registering a customer', error);
//         throw error;
//     }
// };
// export const loginCustomer = async (data) => {
//     try {
//         const response = await axios.post('/login', data);
//         return response.data;
//     } catch (error) {
//         console.error('There was an error logging in as customer!', error);
//         throw error;
//     }
// };

// export const admin = async (data) => {
//     try {
//         const response = await apiClient.post('/register', data);
//         return response.data;
//     } catch (error) {
//         console.error('There was an error registering a customer', error);
//         throw error;
//     }
// };
// export const loginAdmin = async (data) => {
//     try {
//         const response = await axios.post('/login', data);
//         return response.data;
//     } catch (error) {
//         console.error('There was an error logging in as customer!', error);
//         throw error;
//     }
// };

class ApiService {
    static BASE_URL = 'http://localhost:8080';

    static async register(userData) {
        try {
            console.log('Sending user data:', userData);
            const response = await axios.post(
                `${ApiService.BASE_URL}/api/v1/serviceProvider/register`,
                userData,
                {
                    headers: {'Content-Type': 'application/json'}
                }
            );
            console.log("registration Successful: ", response)
            return response.data;
        } catch (error) {
            console.error('Error during registration:', error.response ? error.response.data : error.message);
            throw error;
        }
    }

    static async customerRegister(userData) {
        try {
            console.log('Sending user data:', userData);
            const response = await axios.post(
                `${ApiService.BASE_URL}/api/v1/customer/register`,
                userData,
                {
                    headers: {'Content-Type': 'application/json'}
                }
            );
            console.log("registration Successful: ", response)
            return response.data;
        } catch (error) {
            console.error('Error during registration:', error.response ? error.response.data : error.message);
            throw error.response ? error.response.data : new Error('Network or server error');
        }
    }

    static async loginProvider(userData) {
        try {
            console.log('Sending user data:', userData);
            const response = await axios.post(
                `${ApiService.BASE_URL}/api/v1/ServiceFusion/loginServiceProvider`,
                userData,
                {
                    headers: {'Content-Type': 'application/json'}
                }
            );
            console.log("login Successful: ", response)
            return response.data;
        } catch (error) {
            console.error('Error during registration:', error.response ? error.response.data : error.message);
            throw error;
        }
    }

    static async bookService(userData) {
        try {
            console.log('sending user data', userData)
            const response = await axios.post(
                `${ApiService.BASE_URL}/api/v1/customer/bookService`,
                userData,
                {
                    headers: {'Content-Type': 'application/json'}
                }
            );
            console.log("Booking Successful: ", response)
            return response.data;
        } catch (error) {
            console.error('There was an error booking a service')
        }
    }

    static async getProvider(category, location) {
        try {
            console.log("category not found")
            const response = await axios.post(
                `${ApiService.BASE_URL}/api/v1/customer/searchForServiceProvider`,
                {category, location},
                {
                    headers: {'Content-Type': 'application/json'}
                }
                // {
                //     params: {category, location},
                //     headers: {'Content-Type': 'application/json'}
                // }
            );
            console.log("successful", response)
            return response.data;
        } catch (error) {
            console.error("could not get provider category")
        }
    }


}

export default ApiService;

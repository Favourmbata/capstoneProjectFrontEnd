
import axios from "axios";


const apiClient = axios.create({
    providerBaseURL: 'http://localhost:8080/api/v1/ServiceFusion',
    customerBaseURL:'http://localhost:8080/api/v1/customer/',
    adminBaseURL:'http://localhost:8080/api/v1/admin/',
    headers: {
        'Content-Type': 'application/json',
    },
});


export const registerServiceProvider = async (data) => {
    try {
        const response = await apiClient.post('/registerServiceProvider', data);
        return response.data;
    } catch (error) {
        console.error('There was an error registering a service provider', error);
        throw error;
    }
};

export const loginServiceProvider = async (data) => {
    try {
        const response = await axios.post('/login', data);
        return response.data;
    } catch (error) {
        console.error('There was an error logging in the service provider!', error);
        throw error;
    }
};

export const registerCustomer = async (data) => {
    try {
        const response = await apiClient.post('/register', data);
        return response.data;
    } catch (error) {
        console.error('There was an error registering a customer', error);
        throw error;
    }
};
export const loginCustomer = async (data) => {
    try {
        const response = await axios.post('/login', data);
        return response.data;
    } catch (error) {
        console.error('There was an error logging in as customer!', error);
        throw error;
    }
};
export const admin = async (data) => {
    try {
        const response = await apiClient.post('/register', data);
        return response.data;
    } catch (error) {
        console.error('There was an error registering a customer', error);
        throw error;
    }
};
export const loginAdmin = async (data) => {
    try {
        const response = await axios.post('/login', data);
        return response.data;
    } catch (error) {
        console.error('There was an error logging in as customer!', error);
        throw error;
    }
};
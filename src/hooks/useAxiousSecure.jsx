import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const useAxiosSecure = (baseUrl) => {
    const navigate = useNavigate();
    const { logOutUser } = useContext(AuthContext);

    const axiosSecure = axios.create({
        baseURL: `http://localhost:3000`,
    });


    useEffect(() => {

        axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.authorizetion = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        axiosSecure.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response) {
                    const { status } = error.response;
                    console.log(status);
                    if (status === 401 || status === 403) {
                        logOutUser()
                            .then(() => {
                                navigate('/login'); // Redirect to login page after logout
                            })
                            .catch((logoutError) => {
                                console.error('Error logging out:', logoutError);
                            });
                    }
                }
                return Promise.reject(error);
            }
        );

        return () => {
            // Clean up the axiosSecure instance if needed
            axiosSecure.interceptors.request.eject();
            axiosSecure.interceptors.response.eject();
        };
    }, [axiosSecure, logOutUser, navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;

import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (email) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        } else {
            // Make a POST request to your backend API to generate a token
            axios.post('https://bistro-boss-restaurant-server-ecru.vercel.app/jwt', { email })
                .then((response) => {
                    const { token } = response.data;
                    setToken(token);
                    localStorage.setItem('token', token);
                })
                .catch((error) => {
                    console.error('Error generating token:', error);
                });
        }
    }, [email]);

    return [token];
};

export default useToken;
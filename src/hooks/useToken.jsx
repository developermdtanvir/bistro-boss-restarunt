import { useEffect, useState } from "react";

function useToken(email) {

    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            console.log(email);
            fetch('http://localhost:3000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email })
            }).then(res => res.json())
                .then(data => {
                    console.log(data, 'data token')
                });
        }
    }, [email])
    return [token];
}

export default useToken;
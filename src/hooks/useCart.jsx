import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiousSecure";

const useCart = () => {
    // const { user, loading } = useContext(AuthContext);
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, isLoading, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:3000/cart?email=${user?.email}`, {
        //         headers: {
        //             authorizetion: `bearer ${localStorage.getItem('token')}`
        //         }
        //     })
        //     return res.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure(`cart?email=${user?.email}`)
            console.log(res, 'data come from axios secure')
            return res.data;
        },
    })
    return [cart, refetch]
}

export default useCart;
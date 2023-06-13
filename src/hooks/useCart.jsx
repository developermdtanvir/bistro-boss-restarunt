import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from '../providers/AuthProvider';

const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const { refetch, isLoading, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/cart?email=${user?.email}`, {
                headers: {
                    authorizetion: `bearer ${localStorage.getItem('token')}`
                }
            })
            return res.json();
        }
    })
    return [cart, refetch]
}

export default useCart;
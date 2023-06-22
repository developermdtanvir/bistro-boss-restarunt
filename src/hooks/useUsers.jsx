import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiousSecure";

const useUsers = () => {
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: user = [], isLoading, status } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('users')
            return res.data
        }
    })
    return [user, isLoading, refetch, status];
}

export default useUsers;
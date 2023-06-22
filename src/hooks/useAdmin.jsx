import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiousSecure";

function useAdmin() {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: isAdmin, refetch, isLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`users/admin/${user?.email}`)
            console.log(res, 'is admin response')
            return res.data.admin;
        }
    })
    return [isAdmin, isLoading, refetch]

}

export default useAdmin;
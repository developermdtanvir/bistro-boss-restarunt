import { useQuery } from "react-query";

const useMenu = () => {

    const { refetch, data: menu = [], isLoading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://bistro-boss-restaurant-server-ecru.vercel.app/menu')
            return res.json()
        }
    })
    return [menu, isLoading, refetch];
}

export default useMenu;
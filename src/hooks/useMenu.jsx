import { useQuery } from "react-query";

const useMenu = () => {

    const { refetch, data: menu = [], isLoading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/menu')
            return res.json()
        }
    })
    return [menu, isLoading, refetch];
}

export default useMenu;
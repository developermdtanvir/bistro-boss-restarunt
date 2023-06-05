import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";


export const router = createBrowserRouter([
    {
        element: <Main />,
        path: '/',
        children: [

            {
                element: <Home />,
                path: '/'
            },
            {
                element: <Menu />,
                path: '/menu'
            },
            {
                element: <Shop />,
                path: '/shop'
            },
        ]
    }
])


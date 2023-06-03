import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";


export const router = createBrowserRouter([
    {
        element: <Main />,
        path: '/',
        children: [

            {
                element: <Home />,
                path: '/'
            }
        ]
    }
])


import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import LoginLayout from "../layout/LoginLayout";
import Main from "../layout/Main";
import SignUpLayout from "../layout/SignUpLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Signup from "../pages/Signup/Signup";


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
                path: '/shop/:category'
            },
        ]
    },
    {
        element: <LoginLayout />,
        path: '/login',
        children: [
            {
                element: <Login />,
                path: '/login'
            }
        ]
    },
    {
        element: <SignUpLayout />,
        path: '/signup',
        children: [
            {
                element: <Signup />,
                path: '/signup'
            }
        ]
    },
    {
        element: <DashboardLayout />,
        path: '/dashboard',
        children: [
            {
                element: <Dashboard />,
                path: '/dashboard'
            },
            {
                element: <MyCart />,
                path: '/dashboard/cart'
            },
            {
                element: <MyCart />,
                path: '/dashboard/carts'
            },
        ]
    },
])


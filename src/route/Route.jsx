import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import LoginLayout from "../layout/LoginLayout";
import Main from "../layout/Main";
import SignUpLayout from "../layout/SignUpLayout";
import AddItem from "../pages/Dashboard/AddItem";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../pages/Dashboard/AllUsers";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageItem from "../pages/Dashboard/ManageItem";
import MyCart from "../pages/Dashboard/MyCart";
import Payment from "../pages/Dashboard/Payment/Payment";
import Review from "../pages/Dashboard/Review";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Shop from "../pages/Shop/Shop";
import Signup from "../pages/Signup/Signup";
import AdminRoute from "./AdminRoute";


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
            {
                element: <PageNotFound />,
                path: '*'
            }
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
            {
                element: <AdminRoute><AdminHome /></AdminRoute>,
                path: '/dashboard/adminhome'
            },
            {
                element: <AddItem />,
                path: '/dashboard/additem'
            },
            {
                element: <Review />,
                path: '/dashboard/review'
            },
            {
                element: <ManageItem />,
                path: '/dashboard/manageitem'
            },
            {
                element: <UpdateItem />,
                path: '/dashboard/manageitem/:id'
            },
            {
                element: <AllUsers />,
                path: '/dashboard/alluser'
            },
            {
                element: <Payment />,
                path: '/dashboard/payment'
            },
        ]
    },
])


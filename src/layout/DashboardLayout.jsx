import { AiFillShopping, AiOutlineHome } from 'react-icons/ai';
import { BsCalendar3WeekFill } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrContactInfo } from 'react-icons/gr';
import { MdPayment } from 'react-icons/md';
import { VscPreview } from 'react-icons/vsc';
import { NavLink, Outlet } from "react-router-dom";


function DashboardLayout() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <nav id="sidebar" className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}
                    <li className='text-black uppercase font-bold'><NavLink to='/dashboard'><AiOutlineHome className=' text-2xl' /> User Home</NavLink ></li>
                    <li className='text-black uppercase font-bold'><NavLink to='/dashboard/carts'><FaCalendarAlt className=' text-2xl' /> reservation</NavLink ></li>
                    <li className='text-black uppercase font-bold'><NavLink to='/dashboard/history'><MdPayment className=' text-2xl' /> payment history</NavLink ></li>
                    <li className='text-black uppercase font-bold'><NavLink to='/dashboard/cart'><FiShoppingCart className=' text-2xl' /> My Cart</NavLink ></li>
                    <li className='text-black uppercase font-bold'><NavLink to='/dashboard/review'><VscPreview className=' text-2xl' /> Add Review</NavLink ></li>
                    <li className='text-black uppercase font-bold'><NavLink to='/dashboard/booking'><BsCalendar3WeekFill className=' text-2xl' /> My Booking</NavLink ></li>
                    <div className="divider"></div>
                    <li className='text-black uppercase font-bold'><NavLink to='/dashboard'><AiOutlineHome className=' text-2xl' /> Home</NavLink ></li>
                    <li className='text-black uppercase font-bold'><NavLink to='/dashboard/menu'><GiHamburgerMenu className=' text-2xl' /> Menu</NavLink ></li>
                    <li className='text-black uppercase font-bold'><NavLink to='/dashboard/shop'><AiFillShopping className=' text-2xl' /> Shop</NavLink ></li>
                    <li className='text-black uppercase font-bold'><NavLink to='/dashboard/contact'><GrContactInfo className=' text-2xl' /> Contact</NavLink ></li>
                </ul>

            </nav>
        </div>
    )
}

export default DashboardLayout;
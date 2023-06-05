import { Link } from 'react-router-dom';
import logo from '../../../assets/school.png';
function Navbar() {
    const nav = <>
        <li className='uppercase'><Link to='/'>Home</Link></li>
        <li className='uppercase'><Link>Contact us</Link></li>
        <li className='uppercase'><Link>Dashboard</Link></li>
        <li className='uppercase'><Link to='/menu'>Our Menu</Link></li>
        <li className='uppercase'><Link to='/shop'>our shop</Link></li>
    </>
    return (
        <div className="navbar bg-black fixed z-10 text-white max-w-screen-xl bg-opacity-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <img className=' h-10' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>

        </div>
    )
}


export default Navbar;
import { useContext } from 'react';
import { AiOutlineShop, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiWallet } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineLibraryBooks, MdPayment, MdReviews } from 'react-icons/md';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { AuthContext } from '../../providers/AuthProvider';
function Dashboard() {
    const { user } = useContext(AuthContext);

    useDocumentTitle('dashboard')


    return (
        <div>
            <h1>Welcome to dashboard</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className='w-60 lg:w-80 h-40 flex justify-center items-center bg-gradient-to-r rounded-md from-purple-600 to-purple-100 space-x-5'>
                    <BiWallet className=' text-4xl' />
                    <div className=' text-white'>
                        <h1 className=' font-bold text-2xl'>{204}</h1>
                        <p>Menu</p>
                    </div>
                </div>
                <div className='w-60 lg:w-80 h-40 flex justify-center items-center bg-gradient-to-r rounded-md from-yellow-400 to-yellow-100 space-x-5'>
                    <AiOutlineShop className=' text-4xl' />
                    <div className=' text-white'>
                        <h1 className=' font-bold text-2xl'>{204}</h1>
                        <p>Menu</p>
                    </div>
                </div>
                <div className='w-60 lg:w-80 h-40 flex justify-center items-center bg-gradient-to-r rounded-md from-pink-800 to-pink-100 space-x-5'>
                    <FiPhoneCall className=' text-4xl' />
                    <div className=' text-white'>
                        <h1 className=' font-bold text-2xl'>{204}</h1>
                        <p>Menu</p>
                    </div>
                </div>
            </div>

            <div className=' flex flex-col lg:flex-row m-5 space-x-2'>
                <div className='flex flex-col justify-center items-center h-80 lg:w-1/2 bg-[#FFEDD5] rounded-md'>
                    <div className="avatar ">
                        <div className="w-24 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <h1 className=' text-2xl font-bold text-black'>{user?.displayName}</h1>
                </div>
                <div className='flex flex-col justify-center items-center h-80 lg:w-1/2 bg-[#FEF9C3] rounded-md'>
                    <h1 className=' text-3xl font-semibold uppercase text-black'>Your Activities</h1>

                    <div className=' space-y-4'>
                        <p className=' flex justify-center items-center '><AiOutlineShoppingCart className=' text-2xl text-black' /> Orders</p>
                        <p className=' flex justify-center items-center '><MdReviews className=' text-2xl text-black' /> Reviews</p>
                        <p className=' flex justify-center items-center '> <MdOutlineLibraryBooks className=' text-2xl text-black' /> Bookings</p>
                        <p className=' flex justify-center items-center '><MdPayment className=' text-2xl text-black' /> Payment</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;
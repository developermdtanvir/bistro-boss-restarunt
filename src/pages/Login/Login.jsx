import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import loginImage from '../../assets/others/authentication2.png';
import './Login.css';
function Login() {
    return (
        <div className=' background-image'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center ">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                        <h1 className='hidden lg:flex justify-center items-center text-4xl text-black font-bold'>Login</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input " />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#D1A054] text-white">Login</button>
                            </div>
                        </div>
                        <div className='text-center'>
                            <p className=' text-gray-400'>Or sign in with</p>
                            <br />
                            <div className="flex justify-around items-center">
                                <FaFacebookF className="text-4xl text-gray-500 border-gray-500 cursor-pointer border-2 rounded-full" />
                                <FaGithub className="text-4xl text-gray-500 border-gray-500 cursor-pointer border-2 rounded-full" />
                                <AiOutlineGoogle className="text-4xl text-gray-500 border-gray-500 cursor-pointer border-2 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;